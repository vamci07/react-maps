import React, { useState, useEffect, useRef } from "react";
import { functions, isEqual, omit } from "lodash";
import styled from "styled-components";

const MapContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  font-family: Nunito;
`;

function GoogleMap({ options, onMount, className, onMountProps }) {
  const ref = useRef();
  const [map, setMap] = useState();
  useEffect(() => {
    const onLoad = () =>
      setMap(new window.google.maps.Map(ref.current, { ...options }));
    if (!window.google) {
      const script = document.createElement(`script`);
      script.src =
        `https://maps.googleapis.com/maps/api/js?key=` +
        process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
      document.head.append(script);
      script.addEventListener(`load`, onLoad);
      return () => script.removeEventListener(`load`, onLoad);
    } else onLoad();
  }, [options]);
  if (map && typeof onMount === `function`) onMount(map, onMountProps);
  return <MapContainer {...{ ref, className }} />;
}

function shouldNotUpdate(props, nextProps) {
  const [funcs, nextFuncs] = [functions(props), functions(nextProps)];
  const noPropChange = isEqual(omit(props, funcs), omit(nextProps, nextFuncs));
  const noFuncChange =
    funcs.length === nextFuncs.length &&
    funcs.every((fn) => props[fn].toString() === nextProps[fn].toString());
  return noPropChange && noFuncChange;
}

export default React.memo(GoogleMap, shouldNotUpdate);
GoogleMap.defaultProps = {
  options: {
    center: { lat: 30.263497, lng: -81.530425 },
    zoom: 15,
  },
};
