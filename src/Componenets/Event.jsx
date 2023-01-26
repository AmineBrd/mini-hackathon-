import React,{useEffect,useRef} from 'react'

const Event = ({timeline,ease}) => { 

   let itemsSetup1 = useRef(null)
   let itemsSetup2 = useRef(null)
   let itemsSetup3 = useRef(null)
   let itemsSetup4 = useRef(null)
   let Videos = useRef(null)
    useEffect(()=>{
      timeline.from([Videos],2,{
        opacity: 0,
            x: 200,
            stagger: {
                amount: .4
            },
            ease: ease
      })
    })
    useEffect(()=>{
      timeline.from([itemsSetup1,itemsSetup2,itemsSetup3,itemsSetup4],2,{
        opacity: 0,
            y: -200,
            stagger: {
                amount: .4
            },
            ease: ease
      })
    })
    let btn = document.querySelector("button");
    let click = true;
    let hide = document.querySelector(".hide");
    let buttonEvent = ()=>{
      if(click){
        hide.style.visibility = "hidden";
        click= false;
        window.scrollTo(0,0);
        btn.innerText = "٧"
      }else{
        hide.style.visibility = "visible";
        click= true;
     
      }
    }

  return (
    <div>
      <div>
        <h1 style={{
        paddingBottom: "1rem" ,
        paddingTop: "2rem" }}>L'ALGERIE</h1>
        <p className='caption'>est un pays d’Afrique du Nord faisant partie du Maghreb. Depuis 1962, elle est nommée en forme 
longue République algérienne démocratique et populaire, Sa capitale est Alger, la ville la plus peuplée du pays,
 dans le Nord,elle contient 58 etats avec des cultures et des dialectes differents 
et de nombreuses attractions archeologiques et touristiques.visitez-la!un pays extraordinaire!</p>
        <iframe src='https://www.youtube.com/embed/MNW83Hv-lps' ref = {el => Videos = el}></iframe>
      </div>
      <h1 style={{
        paddingBottom: "1rem" ,
        paddingTop: "2rem" ,
      }}>Evenements</h1>
      <button onClick={buttonEvent} >٧</button>
      <div className='hide' id='hide'  >
        <div className='itemsSetup' ref = {el => itemsSetup1 = el}>
            <img src="https://pbs.twimg.com/media/E5ibWWyWYAQGkH0.jpg"></img>
            <h1>le 1er nouvembre</h1>
            <p className="Cards">la fete de revolution  nationale algerienne.cette date signifie beaucoup de 
chose pour les algeriens,ils celebrent cette derniere par:l'hymne national algerien,la sortie de diverses forces d'armee
,les scouts et le peuple dans des manifestation pacifique,exposition de voitures classiques de cette epoque...</p>
        </div>
        
        <div className='itemsSetup' ref = {el => itemsSetup2 = el}>
        <img src="https://www.revuedesdeuxmondes.fr/wp-content/uploads/2017/07/indep-1024x744.jpg"></img>
        <h1>le 5 juillet</h1>
            <p className="Cards">Après 132 ans de colonisation française l'algerie a obtenu son independance le 5 juillet 1962
cette date a une grande valeur morale dans les coeurs algeriens</p>
        </div>
        <div className='itemsSetup'  ref = {el => itemsSetup3 = el}>
        <img src="https://www.algerie360.com/wp-content/uploads/2018/02/chahid.jpg"></img>
            <h1>18 fevrier</h1>
            <p className="Cards">La date du 18 février fût consacrée comme Journée nationale du CHAHID. 
Elle est commémorée chaque année à la mémoire de valeureux résistants et martyrs, 
en reconnaissance des énormes sacrifices qu'ils ont consentis pour la libération de l'Algérie.</p>
        </div>
        <div className='itemsSetup' ref = {el => itemsSetup4 = el}>
        <img src="data:image/jpeg;base64,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"></img>
        <h1>18 avril</h1>
            <p className="Cards">A l'occasion de la célébration de la Journée du Savoir (Yaoum El Ilm) 
        et l'anniversaire du décès de Cheikh Abdelhamid Ibn Badis, l’Algérie a célébré 
la fête du savoir et science en hommage du fondateur de l’Association des savants musulmans algériens et le leader du regain de la science et
 de la culture chez le peuple algérien pendant la période coloniale.</p>
        </div>

      </div>
    </div>
  )
 
}

export default Event