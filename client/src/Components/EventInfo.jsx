import { Link, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import VenueLocationBox from "./VenueLocationBox.jsx";
import globalContext from "../context/GlobalContext.jsx";
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";

export default function () {
  const data = useContext(globalContext);
  const showList = data.showList;
  const [selectedShow, setSelectedShow] = useState();
  const [selectedVenue, setSelectedVenue] = useState();
  const [isLess, setIsLess] = useState(false);
  const name = useParams().name;
  let shareUrl = "/" + name;

  if (typeof window === "object") {
    shareUrl = String(window.location);
  }

  const getShowInAllLocation = showList.filter((show) => show.name === name);
  const venueLocations = [
    ...new Set(getShowInAllLocation.map((show) => show.location)),
  ];

  useEffect(() => {
    setSelectedShow(showList.find((event) => event.name === name));
  }, [showList]);

  if (!selectedShow) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="event-container">
      <h2>{selectedShow.name}</h2>
      <img src={selectedShow.trailer} className="trailer-photo" alt="trailer" />
      <div className="trailer-buttons">
        <Link to={"/eventselection"} state={{ data: selectedShow.name }}>
          <button className="buy-tickets">Buy Tickets</button>
        </Link>
        <SharingButtons />
      </div>
      <div className="event-info">
        <h3>General Information about the event</h3>
        <p>
          Quisque neque tellus, maximus quis semper quis, eleifend ut nisl.
          Praesent venenatis magna odio, a iaculis mi euismod ut. Integer nunc
          nunc, convallis at massa vel, congue facilisis nulla. Nam sit amet sem
          lorem. Pellentesque imperdiet magna odio, a ullamcorper libero
          vehicula bibendum. Etiam vel dolor tristique tellus efficitur
          condimentum. Sed id hendrerit nunc. Orci varius natoque penatibus et
          magnis dis parturient montes, nascetur ridiculus mus. Morbi non dui ac
          felis auctor posuere non nec nibh. In non justo eu nisi volutpat
          tempor ac eu nibh. Donec mattis felis nec tincidunt convallis. Mauris
          vitae tortor quis justo luctus semper. Aliquam non felis aliquam,
          imperdiet mauris at, egestas justo. Etiam eget diam bibendum, viverra
          mauris ut, sagittis massa. Praesent ultrices tempus pretium.
        </p>
      </div>
      <button
        className="know-more"
        type="button"
        onClick={() => setIsLess(!isLess)}
      >
        {isLess === false ? "More about Artist" : "Hide"}
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </button>
      {isLess && (
        <div className="artist-info">
          <img src={selectedShow.artist} alt="artist" />
          <h3> About: </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut
            metus vitae elit imperdiet porttitor. Integer vel felis elit. Cras
            finibus odio id lobortis fringilla. Duis ac nisl sit amet odio
            tempor varius. Phasellus sed condimentum nisl. Nulla tincidunt
            aliquet est a imperdiet. Sed auctor, ex sit amet venenatis molestie,
            nisi purus dictum metus, quis consequat orci magna ornare tellus.
            Pellentesque gravida id augue a sodales. Aenean vehicula ornare
            velit, nec ultricies sapien accumsan sit amet. Curabitur sagittis
            enim leo, nec scelerisque risus consectetur nec. Pellentesque et leo
            porttitor, mattis mi non, imperdiet ligula. Aenean iaculis, quam a
            tincidunt mollis, enim ante ornare enim, non eleifend ante eros sit
            amet enim. Pellentesque lobortis velit a laoreet tincidunt. Maecenas
            eget tellus pellentesque, imperdiet lorem ac, tincidunt elit. Fusce
            rhoncus faucibus molestie. Ut faucibus nunc at ipsum gravida
            eleifend.
          </p>
          <h3> Life: </h3>
          <p> {selectedShow.life}</p>
        </div>
      )}
      <div className="venue-buttons">
        <p>You can attend this show in</p>
        {venueLocations.map((venue, index) => {
          return (
            <button key={index} onClick={() => setSelectedVenue(venue)}>
              {venue}
            </button>
          );
        })}
      </div>
      <VenueLocationBox
        selectedVenue={selectedVenue ? selectedVenue : selectedShow.location}
      />
    </div>
  );

  function SharingButtons() {
    return (
      <div className="share-buttons">
        <EmailShareButton url={shareUrl} subject="Do you want to join me?">
          <EmailIcon size={30} round />
        </EmailShareButton>
        <FacebookShareButton url={shareUrl}>
          <FacebookIcon size={30} round />
        </FacebookShareButton>
        <TwitterShareButton url={shareUrl}>
          <TwitterIcon size={30} round />
        </TwitterShareButton>
        <WhatsappShareButton url={shareUrl}>
          <WhatsappIcon size={30} round />
        </WhatsappShareButton>
      </div>
    );
  }
}
