import React from 'react';
import styles from "./cv.module.scss"

type CvProps = {

}

const Cv: React.FC<CvProps> = () => {
  return (
  <div className={styles.conteiner}>
    <div className={styles.name}>
      <h1>Zakhozhyi Valentyn</h1>
      <p>Osoite: Valtuustokatu 1 D 48</p>
      <p>01370 Vantaa</p>
      <p>Puh.: +358 40 819 7384</p>
      <p>Sähköpostiosoite: v.zahozhy@gmail.com</p>
      <p>Kansalaisuus: Ukraina</p>
    </div>
    <div className={styles.information}>
      <h2>KOKEMUS</h2>
      <p>7 vuoden kokemus vaatteiden ompeluista, hiomisesta, suunnitteluista ja muotoiluasioissa
avustamisesta.</p>
</div>
<div className={styles.information}>
  <h2>KOULUTUS</h2>
  <p>2021-  Varia ammattikoulu Ohjelmoiti</p>
   <p>2018–2020 Kiovan kansallinen teknologian ja suunnittelun yliopisto
Turkis- ja nahkaompeluteollisuuden asiantuntijateknologi</p>
    <p>2014-2018 Kiovan kansallinen teknologian ja suunnittelun yliopisto
Ompeluteollisuuden asiantuntijateknologi</p>
    <p>2010-2012 Gzitsev-aupungin ammattikoulu
Vaatteiden ompelijahioja, ompelija</p>
</div>
<div className={styles.information}>
   <h2>TYÖKOKEMUS</h2>
  <p>2021- Macdonaldin työntekija</p>
   <p>2022.06.03-2022.07.15 LST siivojaa</p>
   <p>2017-2019 Freelance-työkokeilua Ukrainassa: vaatteiden ompelu-hiominen, suunnittelu ja
muotoilu.</p>
    <p>2016-2017 Elinkeinonharjoittaja Lila Kass: vaatteiden ompeluhiominen.</p>
    <p>2015-2016 Natalia Karukin ateljee: Naisten vaatteiden ompelu ja korjaustyöt.</p>
    <p>2012-2014 Rajavastuuyhtiö Psinichnyn vaatetehdas: eri vaatteiden teollisuusompelu.</p>
</div>
<div  className={styles.information}>
    <h2>KIELITAITO</h2>
    <p>Englanti: suullinen taito - hyvä, kirjallinen taito – hyvä</p>
    <p>Suomi: suullinen taito - kohtalainen (opiskelemassa), kirjallinen taito - kohtalainen
(opiskelemassa)</p>
   <p>Venäjä: suullinen taito - erittäin hyvä, kirjallinen taito - erittäin hyvä
   </p>
   <p>Ukraina: suullinen taito - äidinkieli, kirjallinen taito - äidinkieli</p>
</div>
<div className={styles.information}>
   <h2>VAHVUUDET</h2>
    <p>Sinnikkyys, vastuullisuus, luovuus, tunnollisuus, hyvä pitkä keskittyminen asioihin, uusien
asioiden nopea ja helppo oppiminen.</p>
</div>
    </div>
  )
}

export default Cv
