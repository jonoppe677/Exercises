import './App.css';
import Header from './components/Header';
import MainSection from './components/MainSection';
import Notifications from './components/Notifications';
import SideSection from './components/SideSection';



function App() {

  const notificationData = [
    {
      topic: 'HS-ANALYYSI',
      body: 'Osakkeiden tuotot voivat painua jopa nollaan, varoittaa Danske: "Nyt ei ole oikea aika sijoittajana lisätä riskiä"'
    },
    {
      topic: 'PÄIVÄN TIMANTTI',
      body: 'Maailman tunnetuimmassa kuntosaliohjelmassa on vain kuusi liikettä - Tällainen on Arnold Schwarzeneggerin "kultainen kuusikko", jonka teho on edelleen kiistaton'
    },
    {
      topic: 'MAINOS',
      body: 'Aloita aamusi Hesarilla. Tutustu nyt 2 viikkoa maksutta!'
    },
  ];

  const sideSectionData = [
    {
      numero: '1',
      otsikko: 'Tulipalo',
      content: 'Helsingin Tapuli-kaupungin rivitalon tulipaloa epäillään tuhopoltoksi'
    },
    {
      numero: '2',
      otsikko: 'HS Vantaa',
      content: 'Harvinainen kahdeksankulmainen talo tuli myyntiin Vantaalla - Kyseessä on niin outo näky, että turistit luulevat kodin olevan nähtävyys'
    },
    {
      numero: '3',
      otsikko: 'Tee se näin',
      content: 'On monta tapaa puhdistaa sameat ja roiskeiset peilit, mutta yleinen keino on "rahanhukkaa ja riski terveydellä"'
    },
    {
      numero: '4',
      otsikko: 'Geenitutkimus',
      content: 'Muinoin ei juuri menty naimisiin serkkujen kanssa -nykyään serkun naiminen on suositumpaa kuin entisinä aikoina'
    },
    {
      numero: '5',
      otsikko: 'Energia',
      content: 'Onko tässä uusi ilmalämpöpumppu? Trendiksi noussut tekniikka tekee kerrostalokodeista miellyttäviä ympäri vuoden'
    },
    {
      numero: '6',
      otsikko: 'Suurvaltasuhteet',
      content: 'Kiinan ja USA:n väliset jännitteet kiristyvät Tyynellämerellä, mutta jos sota syttyisi, kumpi voittaisi? - Asiantuntijat vastaavat'
    },
    {
      numero: '7',
      otsikko: 'Tasa-arvo',
      content: 'Suomea pidetään tasa-arvon mallimaana, mutta onko tilanne yhtä hyvä kuin hehkutetaan? Anti-gender-liike ja vihapuhe ovat 2020-luvun uusia uhkia'
    },
  ];

  return (
    <div>
      <Header />
      {
        notificationData.map(element => <Notifications topic={ element.topic } body={ element.body }/>)
      }
        <MainSection />
        <MainSection />
      {
        sideSectionData.map(element => <SideSection numero={ element.numero } otsikko={ element.otsikko } content={ element.content }/>)
      }

    </div>
  );
}

export default App;
