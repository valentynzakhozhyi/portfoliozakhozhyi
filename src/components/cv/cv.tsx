
import React from 'react';
import LocalizedStrings from 'react-localization';
import styles from "./english.module.scss";

interface CvProps {

}
type CvState = { language: string };

let strings = new LocalizedStrings({
  en:{ 
    a:"EXPERIENCE", 
    b:"7 years experience in sewing, sanding, designing and styling garments assistance",
    c:"EDUCATION",
    d:"2021- Varia Vocational School Programmed",
    e:"2018–2020 Kiev National University of Technology and Design Expert technology for the fur and leather sewing industry",
    f:"2014-2018 Kiev National University of Technology and Design Sewing industry expert technologist",
    g:"2010-2012 Gzitsev Aupung Vocational School Garment seamstress, seamstress",
    h:"EXPERIENCE",
    i:"2021- Macdonald's Employee",
    j:"2022.06.03-2022.07.15 LST cleaners",
    k:"2017-2019 Freelance work trials in Ukraine: sewing-grinding, designing and designing clothes design.",
    l:"2016-2017 Trader Lila Kass: sewing grinding of clothes.",
    m:"2015-2016 Natalia Karuk Atelier: Sewing and repair work on women's clothing.",
    n:"2012-2014 Border liability company Psinichny garment factory: industrial sewing of various clothes.",
    o:"LANGUAGE SKILLS",
    p:"English: speaking skills - good, written skills - good",
    q:"Finland: speaking skills - moderate (studying), written - moderate (studying)",
    r:"Russian: speaking skills - very good, written skills - very good",
    s:"Ukraine: speaking skills - mother tongue, written - mother tongue",
    t:"STRENGTHS",
    u:"Perseverance, responsibility, creativity, conscientiousness, good long focus on things, new quick and easy learning of things."
  },
  fi: {
    a:"KOKEMUS",
    b:"7 vuoden kokemus vaatteiden ompeluista, hiomisesta, suunnitteluista ja muotoiluasioissa avustamisesta",
    c:"KOULUTUS",
    d:"2021-  Varia ammattikoulu, Ohjelmointi",
    e:"2018–2020 Kiovan kansallinen teknologian ja suunnittelun yliopisto Turkis- ja nahkaompeluteollisuuden asiantuntijateknologi",
    f: "2014-2018 Kiovan kansallinen teknologian ja suunnittelun yliopisto Ompeluteollisuuden asiantuntijateknologi",
    g:"2010-2012 Gzitsev-aupungin ammattikoulu Vaatteiden ompelijahioja, ompelija",
    h:"TYÖKOKEMUS",
    i:"2021- McDonald's työntekijä",
    j:"2022.06.03-2022.07.15 LST siivoja",
    k:"2017-2019 Freelance-työkokeilua Ukrainassa: vaatteiden ompelu-hiominen, suunnittelu ja muotoilu.",
    l:"2016-2017 Elinkeinonharjoittaja Lila Kass: vaatteiden ompeluhiominen.",
    m:"2015-2016 Natalia Karukin ateljee: Naisten vaatteiden ompelu ja korjaustyöt.",
    n:"2012-2014 Rajavastuuyhtiö Psinichnyn vaatetehdas: eri vaatteiden teollisuusompelu.",
    o:"KIELITAITO",
    p:"Englanti: suullinen taito - hyvä, kirjallinen taito – hyvä",
    q:"Suomi: suullinen taito - kohtalainen (opiskelemassa), kirjallinen taito - kohtalainen (opiskelemassa)",
    r:"Venäjä: suullinen taito - erittäin hyvä, kirjallinen taito - erittäin hyvä",
    s:"Ukraina: suullinen taito - äidinkieli, kirjallinen taito - äidinkieli",
    t:"VAHVUUDET",
    u:"Sinnikkyys, vastuullisuus, luovuus, tunnollisuus, hyvä pitkä keskittyminen asioihin, uusien asioiden nopea ja helppo oppiminen."
  }
 });

class Cv extends React.Component<CvProps, CvState> {
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = {
      language: 'en'
    }
    
    this.handleLanguageChange = this.handleLanguageChange.bind(this);
  }

  handleLanguageChange(e: { preventDefault: () => void; target: { value: any; }; }) {
    e.preventDefault();
    let lang = e.target.value;
    this.setState(prevState => ({
      language: lang
    }))
  }

  render() {
    strings.setLanguage(this.state.language);
    return (
      <div className={styles.conteiner}>
      <div>
        <select  className={styles.btn} onChange={this.handleLanguageChange}>
          <option value="en">En</option>
          <option value="fi">Fi</option>
        </select>
        <div  >
          <div  className={styles.information}>{strings.a } </div>
          <br></br>
          <div  className={styles.text}>{strings.b}</div>
          <br></br>
          <div  className={styles.information}>{strings.c}</div>
          <br></br>
          <div  className={styles.text}>{strings.d}</div>
          <div  className={styles.text}>{strings.e}</div>
          <div  className={styles.text}>{strings.f}</div>
          <div  className={styles.text}>{strings.g}</div>
          <br></br>
          <div className={styles.information}>{strings.h}</div>
          <br></br>
          <div  className={styles.text}>{strings.i}</div>
          <div  className={styles.text}>{strings.j}</div>
          <div  className={styles.text}>{strings.k}</div>
          <div  className={styles.text}>{strings.l}</div>
          <div  className={styles.text}>{strings.m}</div>
          <div  className={styles.text}>{strings.n}</div>
          <br></br>
          <div  className={styles.information}>{strings.o}</div>
          <br></br>
          <div  className={styles.text}>{strings.p}</div>
          <div  className={styles.text}>{strings.q}</div>
          <div  className={styles.text}>{strings.r}</div>
          <div  className={styles.text}>{strings.s}</div>
          <br></br>
          <div className={styles.information}>{strings.t}</div>
          <br></br>
          <div  className={styles.text}>{strings.u}</div>
          </div>
        <br /><br />
      </div>
      </div>
    )
  }
}


export default Cv 
