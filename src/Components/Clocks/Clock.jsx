import React, { useState, useEffect } from 'react'
import "./Clock.css"

export default function Clock() {
    const [dateNow, setDate] = useState(getTime())

    useEffect(() => {
        setInterval(() => {
            setDate(getTime())
        }, 1000)

    }, [])

    function getTime() {
        var date = new Date(),
            hours = (date.getHours() < 10) ? 
            '0' + date.getHours() : date.getHours(),
            minutes = (date.getMinutes() < 10) ? 
            '0' + date.getMinutes() : date.getMinutes(),
            seconds = (date.getSeconds() < 10) ? 
            '0' + date.getSeconds() : date.getSeconds();
        return { hours, minutes, seconds }
    }

    return (
        <div className="clock">
            {dateNow.hours + ':' + dateNow.minutes + ':' + dateNow.seconds}
        </div>
    )
}