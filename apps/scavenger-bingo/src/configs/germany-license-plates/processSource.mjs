import fs from 'fs';

const CONFIG_DIRECTORY_PATH = './src/configs/germany-license-plates/';
const IMAGE_DESTINATION_PATH = './public/symbols/originals/germany-license-plates/';

const imageTemplate = fs.readFileSync(`${CONFIG_DIRECTORY_PATH}template.svg`, 'utf8');

function formatAsId (id) {
    return id
        .toLowerCase()
        .replace('ä', 'ae')
        .replace('ö', 'oe')
        .replace('ü', 'ue');
}

function createImageFile (fileName, text) {
    const filePath = `${IMAGE_DESTINATION_PATH}${fileName}`;
    try {
        fs.writeFileSync(filePath, imageTemplate.replace('{{replace}}', text));
        console.log('File created: ', filePath);
    } catch (err) {
        console.error(err);
    }
}


function createTranslationFiles (translations) {
    try {
        Object.entries(translations).forEach(([langKey, langTranslations]) =>{
            console.log({langKey, langTranslations})
            fs.writeFileSync(`${CONFIG_DIRECTORY_PATH}translations/${langKey}.json`, JSON.stringify(langTranslations));
            console.log('Translations created', langKey);
        });
    } catch (err) {
        console.error(err);
    }
}

try {
    const unparsedSource = fs.readFileSync(`${CONFIG_DIRECTORY_PATH}source.json`, 'utf8');
    const source = JSON.parse(unparsedSource);
    const translations = {
        'de': {},
        'en': {},
    };

    const symbols = source.map((symbol) => {
        const name = symbol['Kennzeichen'];
        const id = `d-plate-${formatAsId(name)}`;
        const file = `${id}.svg`;

        translations['de'][id] = name;
        translations['en'][id] = name;

        const config =  {
            id,
            file,
        };

        const bundesland = symbol['Bundesland'];
        if (bundesland) {
            const id = formatAsId(bundesland);
            config['tags'] = [id];
            translations['de'][id] = bundesland;
            translations['en'][id] = bundesland;
        }
        
        createImageFile(file, name);

        return config;
    });

    fs.writeFileSync(`${CONFIG_DIRECTORY_PATH}config.json`, JSON.stringify({ symbols, presets: [] }));
    createTranslationFiles(translations);

} catch (err) {
    console.error(err);
}
