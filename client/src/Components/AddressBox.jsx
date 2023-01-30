const AddressBox = () => {
    return (
            <div className='location-box'>
                <h3 className='location-headline'>Location</h3>
                <p className='show-address'> <span className="boldWord">Address</span>: Hyllie stationstorg 2, 215 32 Malmö</p>
                <iframe className="map-iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2256.1970216486584!2d12.974030052116381!3d55.563768280407515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4653a1306e9d6db9%3A0xccee96bbe8b04c3a!2sHyllie%20Stationstorg%202%2C%20215%2032%20Malm%C3%B6!5e0!3m2!1sen!2sse!4v1674224926270!5m2!1sen!2sse" title="description"></iframe>
                <p><a className="directions-link" href="https://www.google.com/maps/place/Hyllie+Stationstorg+2,+215+32+Malm%C3%B6/@55.5637683,12.9740301,17z/data=!3m1!4b1!4m5!3m4!1s0x4653a1306e9d6db9:0xccee96bbe8b04c3a!8m2!3d55.5637683!4d12.9762241" target="_blank">Get directions to the show</a></p>
            </div>
    )
}

export default AddressBox
