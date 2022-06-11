import { useState } from 'react';

const GoogleAutocomplete = () => {
  // const [place, setPlace] = useState<Place | null>(null);

  interface InputInterface {
    e: React.ChangeEvent<HTMLInputElement>;
  }

  const handlePlaceChanged = ({ e }: InputInterface) => {
    // --------------------------------------------------------------------------------
    // 📌  Google Autocomplete
    // --------------------------------------------------------------------------------

    const input = e.target.value;

    // Add TypeScript definitions package for Google Maps API
    const services = new google.maps.places.AutocompleteService();
    const request = {
      input,
      componentRestrictions: { country: 'uk' },
    };
    services.getPlacePredictions(request, (predictions, status) => {
      if (status !== google.maps.places.PlacesServiceStatus.OK) {
        console.log(status);
        return;
      }
      console.log('🐞 PREDICTION', predictions); // debug

      // populate predictions into autocomplete-response div
      const autocompleteResponse = document.getElementById(
        'autocomplete-response'
      );
      if (!autocompleteResponse) return;

      // if no predictions hide autocompleteResponse div
      if (input.length < 2) {
        autocompleteResponse.style.display = 'none';
        return;
      } else {
        autocompleteResponse.style.display = 'block';
      }
      // if (!predictions || !predictions.length)

      autocompleteResponse.innerHTML = '';
      predictions.forEach((prediction) => {
        const li = document.createElement('li');
        li.innerHTML = prediction.description;
        autocompleteResponse.appendChild(li);
      });
    });
    // setPlace(place);
  };

  return (
    <div className="flex-col center">
      <input
        className="input"
        placeholder="google autocomplete services"
        type="text"
        onChange={(e) => handlePlaceChanged({ e })}
      />
      <div id="autocomplete-response"></div>
    </div>
  );
};

export default GoogleAutocomplete;
