import React, { useState, useEffect, useRef } from "react";
import { functions, isEqual, omit } from "lodash";
import styled from "styled-components";

const MapContainer = styled.div`
  font-family: Nunito;
  height: calc(100vh - 420px);
  border-radius: 8px;
`;

function GoogleMap({ apiKey, options, onMount, className, onMountProps }) {
  const ref = useRef();
  const [map, setMap] = useState();
  useEffect(() => {
    const onLoad = () =>
      setMap(new window.google.maps.Map(ref.current, { ...options }));
    if (!window.google) {
      const script = document.createElement(`script`);
      const key = process.env.REACT_APP_GOOGLE_MAPS_API_KEY || apiKey;
      script.src = `https://maps.googleapis.com/maps/api/js?key=` + key;
      document.head.append(script);
      script.addEventListener(`load`, onLoad);
      return () => script.removeEventListener(`load`, onLoad);
    } else onLoad();
  }, [options, apiKey]);
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
