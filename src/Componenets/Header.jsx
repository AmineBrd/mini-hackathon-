import React from 'react'
import Feedback from './Feedback'

const Header = () => {
  return (
    <div>
        <h1 className='algerie'>
        L’ALGERIE
        </h1>
        <p className='def'>est un pays d’Afrique du Nord faisant partie du Maghreb. Depuis 1962, elle est nommée en forme longue République algérienne démocratique et populaire, Sa capitale est Alger, la ville la plus peuplée du pays, dans le Nord,elle contient 58 etats avec des cultures et des dialectes differents et de nombreuses attractions archeologiques et touristiques.visitez-la!un pays extraordinaire!</p>
        <img className='girl' src='https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=600'></img>
        <h1 className='decouvrir'>Decouvrir plus</h1>
         <div className='container-card'>
              <div className='car'>
                <img className='card' src='https://www.atterrir.com/wp-content/uploads/2018/06/plage-madagh-oran.png'></img>
                <p className='cards1'>Mer</p>
              </div>
              <div className='car'>
                <img className='card' src='https://www.algerie-eco.com/wp-content/uploads/2019/12/sud.jpg'></img>
                <p className='cards2'>Sahara</p>
              </div>
              <div className='car'>
                <img className='card' src='https://www.vitaminedz.com/photos/205/205640-setif-sous-la-neige.jpg'></img>
                <p className='cards3'>Neige</p>
              </div>
              <div className='car'>
                <img className='card' src='https://upload.wikimedia.org/wikipedia/commons/5/55/ORAN_%2C_VILLE_D%27ALGERIE.jpg'></img>
                <p className='cards4'>Histoire</p>
              </div>
          </div> 

        <h1 className='top'>TOP 10</h1>
        <div className='container'>
            <div className='c-right'>
            <ul className='c-right' >
              <li className="top">.Alger</li>
              <li className="top">.Oran</li>
              <li className="top">.Annaba</li>
              <li className="top">.Costantine</li>
              <li className="top">.Djanet</li>
            </ul>
            </div>
            <div  className='c-left'>
            <ul className='c-left' >
              <li className="top">.Setif</li>
              <li className="top">.Tlemcen</li>
              <li className="top">.Atakor</li>
              <li className="top">.Batna</li>
              <li className="top">.Ghardaia</li>
            </ul>
            </div>
        </div>
        <Feedback />
    </div>
  )
}

export default Header