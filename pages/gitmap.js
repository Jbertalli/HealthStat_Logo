import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import { Grid } from 'semantic-ui-react';

const LOCAL_STORAGE_KEY = 'State';

const date = new Date();
const day = date.getUTCDate();
const month = date.getMonth();
const year = date.getFullYear();

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
const monthName = months[month];

export default function GitMap() {
    const [clicked, setClicked] = useState(false);
    console.log(`${monthName} ${day}, ${year}`);
    const dateFormat = `${monthName} ${day}, ${year}`;

    useEffect(() => {
        const storedState = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
        if (storedState) setClicked(storedState)
    }, [])

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, 
            JSON.stringify(clicked))
    }, [clicked])

    // let arr = [];

    // let yearMap = function() {
    //     for (let i = 0; i <= 365; i++) {
    //         console.log(i);
    //         arr.push(i);
    //     }
    // }

    let now = new Date();
    let daysOfYear = [];
    for (var d = new Date(2022, 0, 1); d <= now; d.setDate(d.getDate() + 1)) {
        daysOfYear.push(new Date(d).toLocaleDateString('en-us', { month:"short", day:"numeric", year:"numeric" }));
    }

    console.log(daysOfYear);

    let arr2 = [];
    for(let i = 0; i < 10; i++) {
        arr2.push(i);
    }

    let output = daysOfYear.map(item => 
        <span>
            <div
                style={{ margin: '3px', width: '12px', height: '12px', background: 'green', borderRadius: '2px', border: '1px solid black', cursor: 'pointer' }} 
            />
        </span>)

    return (
        <>
            <Head>
                <title>GitMap</title>
                <meta name="description" content="gitmap" />
            </Head>
            {clicked ? (
            <>
                <div onClick={() => setClicked(false)} style={{ margin: '30px', width: '10px', height: '10px', background: 'green', borderRadius: '2px', border: '1px solid black', cursor: 'pointer' }} />
                {dateFormat}
            </>
            ):(
            <>
                <div onClick={() => setClicked(true)} style={{ margin: '30px', width: '10px', height: '10px', background: 'white', borderRadius: '2px', border: '1px solid black', cursor: 'pointer' }} />
                No Date
            </>
            )}
            <div>
                {output}
            </div>
            {/* <table style={{ marginTop: '100px' }}>
                <th>
                    Dates to Push
                </th>
                <tr>
                    <ul>
                        {dateFormat}
                    </ul>
                </tr>
            </table> */}
        </>
    );
}
