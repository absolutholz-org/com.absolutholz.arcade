import fs from 'fs';

const DESTINATION_PATH = './public/symbols/originals/germany-license-plates/';

try {
    const template = fs.readFileSync('./src/configs/germany-license-plates/template.svg', 'utf8');
    const unparsedConfig = fs.readFileSync('./src/configs/germany-license-plates/symbols.json', 'utf8');
    const config = JSON.parse(unparsedConfig);
    // console.log(template, config);

    config.forEach(({id}) => {
        const fileName = `${id}.svg`;
        const filePath = `${DESTINATION_PATH}${fileName}`;
        try {
            fs.writeFileSync(filePath, template.replace('{{replace}}', id));
            console.log('File created: ', filePath);
        } catch (err) {
            console.error(err);
        }
    });

} catch (err) {
    console.error(err);
}
