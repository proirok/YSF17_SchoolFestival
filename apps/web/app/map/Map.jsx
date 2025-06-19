"use client"
import { CRS, LatLng, LatLngBounds, Icon} from 'leaflet';
import React from 'react';
import { MapContainer, ImageOverlay, LayersControl, Marker, Popup} from 'react-leaflet'
import Link from 'next/link'
import Image from 'next/image'
import './Map.css';
export const Map = () => {
  const picwidth = 960;
  const picheight = 540;
  const position1 = [picheight/2,picwidth/2];

  const ICON = Icon({
  iconUrl: "https://raw.githubusercontent.com/proirok/buffer/refs/heads/main/map_pin.svg",
  iconSize: [200, 200],
  iconAnchor: [100, 100],
  popupAnchor: [0, -50],
  });

  return (
    <MapContainer
    crs={CRS.Simple}
    center={new LatLng(picheight/2, picwidth/2)}
    zoom={0}
    style={{ width: picwidth, height: picheight }}
    maxBounds={[[0,0], [picheight, picwidth]]}
  >
    <LayersControl position="bottomright" collapsed="true">
      <LayersControl.BaseLayer checked name = "1階">
        <ImageOverlay url={'https://raw.githubusercontent.com/proirok/buffer/refs/heads/main/sample_map.svg'} bounds={new LatLngBounds([[0, 0], [picheight, picwidth]])} />
      </LayersControl.BaseLayer>
      <LayersControl.BaseLayer name = "2階">
        <ImageOverlay url={'https://raw.githubusercontent.com/proirok/buffer/refs/heads/main/sample_map2.svg'} bounds={new LatLngBounds([[0, 0], [picheight, picwidth]])} />
      </LayersControl.BaseLayer>
    </LayersControl>
    <Marker position = {position1} icon={ICON}>
      <Popup>
        <Image src="https://raw.githubusercontent.com/proirok/buffer/refs/heads/main/map_pin.svg" alt="マップピンアイコン画像" width={200} height={100}/>
        <Link href="https://www.mrchildren.jp/" target="blank" rel="noopener noreferrer">
        Mr.Childrenのホームページ
        </Link>
      </Popup>
    </Marker>
</MapContainer>
  )
};
