import "../css/eventpage.css";

const malmo = (
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2256.1970216486584!2d12.974030052116381!3d55.563768280407515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4653a1306e9d6db9%3A0xccee96bbe8b04c3a!2sHyllie%20Stationstorg%202%2C%20215%2032%20Malm%C3%B6!5e0!3m2!1sen!2sse!4v1674224926270!5m2!1sen!2sse"
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  />
);

const helsingborg = (
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2228.017495318227!2d12.702991816383156!3d56.05299877626565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46523247d35012f9%3A0x2f23a6f4ffe47c7b!2sHelsingborg%20Arena!5e0!3m2!1sen!2sse!4v1675781260227!5m2!1sen!2sse"
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  />
);

const ystad = (
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2263.6604607497065!2d13.827849838396038!3d55.43371496155817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46547d8e56ee293b%3A0xd7ffa85151b8e88b!2sYstad%20Arena%20%E2%80%93%20idrottshall%2C%20event%20%26%20konferens!5e0!3m2!1sen!2sse!4v1675781341303!5m2!1sen!2sse"
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  />
);

const lund = (
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2248.5908989982054!2d13.186340316375627!3d55.6961000038306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465397c2b1fa1da9%3A0xc68215823ce905ac!2sMejeriet!5e0!3m2!1sen!2sse!4v1675781168686!5m2!1sen!2sse"
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  />
);

const stockholm = (
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8149.252604775216!2d18.07185035395794!3d59.294327063254016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f7826c8abcc0f%3A0x877cbd48baa1997a!2sStockholm%20Globe%20Arena%20Fastigheter%20AB!5e0!3m2!1sen!2sse!4v1675781296266!5m2!1sen!2sse"
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  />
);

export default function venueLocationBox(props) {
  switch (props.selectedVenue) {
    case "Malmö":
      return malmo;
      break;
    case "Mejeriet, Lund":
      return lund;
      break;
    case "Ystad":
      return ystad;
      break;
    case "Lund":
      return lund;
      break;
    case "Stockholm":
      return stockholm;
      break;
    case "Helsingborg":
      return helsingborg;
      break;
  }
}
