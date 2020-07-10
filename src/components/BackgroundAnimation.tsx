import React from 'react'
import Theme from '../core/theme'
import './style.scss'

function BackgroundAnimation() {
    const radiuses = [9, 8, 7, 7, 8, 9, 7]
    const styles = {
        animationArea: {
            background: `linear-gradient(to left, ${Theme.palette.themeLight}, ${Theme.palette.themeLighter})`,
            width: "100%",
            height: "100vh"
        } as React.CSSProperties,
        boxArea: {
            position: "absolute",
            top: "0px",
            left: "0px",
            width: "100%",
            height: "100%",
            overflow: 'hidden'
        } as React.CSSProperties,
        boxAreaLi: {
            position: 'absolute',
            display: 'block',
            listStyle: 'none',
            width: "25px",
            height: "25px",
            bottom: "-150px",
            borderRadius: "50px",
            background: "rgba(255, 255, 255, 0.2)",
            animation: "animate 20s linear infinite",
            boxShadow: "0 0 10px 2px rgba(0,0,0,0.1)"
        } as React.CSSProperties
    }
    return (
        <div className={'bg-animation-main'}>
            <div style={styles.animationArea}>
                <div style={styles.boxArea} className={'box-area'}>
                    {radiuses.map((radius, index) => {
                        console.log('radius: ' + radius)
                        return <li key={index}></li>
                    })}
                </div>
            </div>
        </div>
    )
}

export default BackgroundAnimation