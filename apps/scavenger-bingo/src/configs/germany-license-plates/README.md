# German license plate city/landkreis codes 

## Sources

* https://de.wikipedia.org/wiki/Liste_der_Kfz-Kennzeichen_in_Deutschland
* https://www.govdata.de/web/guest/suchen/-/details/kfz-kennzeichen-deutschland3785e
* https://www.kba.de/DE/Service/Kennzeichen/Functions/kennzeichen.html
* https://www.adac.de/rund-ums-fahrzeug/auto-kaufen-verkaufen/kfz-zulassung/kfz-kennzeichen-deutschland/
* https://www.andyhoppe.com/design/fonts/euro-plate-font/

## Plate creation

1. Install the `EuroPlate.ttf` file. 
2. Create the original plates using the `template.svg` file in this folder.
$ yarn symbols:generate:germany-license-plates
3. Generate optimized versions of each file.
$ yarn symbols:optimize:germany-license-plates
