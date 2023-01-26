import React from 'react'

function Footer() {
  return (
    <div className="footer">
            <footer style={{
              backgroundColor:"#3c4444",
              color:"#b1cdd1",
              marginTop:"100px"
            }}>
              <h1 style={{
                fontFamily: 'Loved by the King', 
                fontSize:'64px'
              }}>
                Recommendations:
              </h1>
                <div style={{
                  paddingLeft:"100px",
                }}>
                <h2 style={{
                  fontSize:'32px',
                  paddingBottom:"20px",
                  fontFamily:"Livvic",
                }}>Visitez l’algerie au mois de juin et juillet.</h2>
                <h2 style={{
                  fontSize:'32px',
                  fontFamily:"Livvic",
                }}>Profitez de votre temps.</h2>
              </div>
            </footer>
    </div>
  )
}

export default Footer