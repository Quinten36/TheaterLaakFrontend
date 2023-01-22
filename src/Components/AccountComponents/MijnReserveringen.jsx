import React from 'react'
import { useState, useEffect } from 'react'
import jsPDF from 'jspdf';
import QRCode from 'qrcode';
export default function MijnReserveringen(props) {
    const [reserveringen, setReserveringen] = useState([])

    useEffect(() => {
        getReservervationsById()
    }, [])

    function getReservervationsById() {
        fetch('${process.env.REACT_APP_BACKEND_URL}/getReservationsByID/${props.userId}')
            .then(response => response.json())
            .then(data => {
                setReserveringen(data)
            })
            .catch(error => console.log(error));
    }

    function downloadPDF() {
        const pdf = new jsPDF();
        pdf.text('Reserveringen:', 10, 10);
        reserveringen.map((reservering, index) => {
            pdf.text(`Titel: ${reservering.show.program.title}`, 10, 20 + (index * 10));
            pdf.text(`Zitplek: Rij : ${reservering.seat.row} Stoel : ${reservering.seat.seatNumber}`, 10, 30 + (index * 10));
            pdf.text(`Start tijd: ${new Date(reservering.show.start).toLocaleString()}`, 10, 40 + (index * 10));
        });
            QRCode.toDataURL('hier komt nog een nuttige url', function (err, url) {
            pdf.addImage(url, 'PNG', 10, 50, 50, 50);
            pdf.save('reserveringen.pdf');
        });
    }

    return (
        <div className='MijnReserveringKaart'>
            {reserveringen.length === 0 ? (
                <p>U heeft geen reserveringen</p>
            ) : (
                reserveringen.map((reservering, index) => {
                    return (
                        <div key={index}>
                            <p>Titel: {reservering.show.program.title}</p>
                            <p>Zitplek: Rij : {reservering.seat.row} Stoel : {reservering.seat.seatNumber}</p>
                            <p>Start tijd: {new Date(reservering.show.start).toLocaleString()}</p>
                            <button onClick={downloadPDF}>Download PDF</button>
                        </div>
                    )
                })
            )}
        </div>
    );
}        
