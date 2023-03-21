import React  from "react";
//Components
import Accordion from "../../../../components/accordion/Accorcdion";
import Header from "../../../../components/header/Header";



const FaqHome = () => {

  return (
    <div className=" h-full   tablet:pb-20 mobile:pb-10">
        <div className="overflow-hidden pb-10 mobile:pb-6 " >
      <Header header="Ofte stilte spørsmål"/>
      </div>
    
      <Accordion
        title="Hvem er dette for?"
        text="Deltakerne på Playwell Online er unge med interesse for dataspill og/eller spillteknologi. Målgruppen vår er alle mellom 9-18 år. "
        border = "border border-red-500 shadow-xl shadow-red-700"
      />
      <Accordion
        title="Hva er Discord?"
        text={<a rel="noopener noreferrer" href="https://www.ice.no/ice-magasinet/Discord-foreldreguide-barnevakten/"  target="_blank">"Discord er et kommunikasjonsprogrma hvor man kan chatte, snakke og ha videosamtaler. Les mer fra Barnevakten her (artikkel er sponset av ice.no)"</a>}
        border = "border border-sky-500 shadow-xl shadow-sky-700"
     />
      <Accordion
        title="Hvordan melder jeg meg på kurs?"
        text={<a rel="noopener noreferrer" href="https://www.playwellonline.no/book-online"  target="_blank">Du kan melde deg på kurs her.Merk at alle kurs er digitale og gjennomføres via Discord!"</a>}
        border = "border border-green-500 shadow-xl shadow-green-700"
     />
        <Accordion
        title="Jeg er påmeldt. Hva nå?"
        text="Du har fått tilsendt en invitasjon til Discord serveren vi skal bruke. Om du lurer på hvordan serveren fungerer se denne videoen eller denne nettsiden."
        border = "border border-yellow-500 shadow-xl shadow-yellow-700"
     />

    </div>
  );
};

export default FaqHome;
