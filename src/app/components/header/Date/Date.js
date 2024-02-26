"use client";

const Dateajd = () => {      

        const today = new Date();
        const dateString = today.toLocaleDateString("fr-FR", {
            weekday: "long",
            day: "numeric",
            month: "long",
        });
        return (
            <p>{dateString}</p>
        );
  };
  
  export default Dateajd;