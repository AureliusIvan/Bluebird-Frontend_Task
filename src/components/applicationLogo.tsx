import { SVGAttributes, useEffect } from 'react';
import LogoBackup from '@/Assets/image/logo.png';
import Image from 'next/image';

export default function ApplicationLogo(props: SVGAttributes<SVGElement>) {
    return (
        <Image
            alt='Bluebird Group Logo'
            unoptimized={true}
            loader={({ src }) => src}
            width={200}
            height={200}
            sizes='(max-width: 200px) 100vw, 200px'
            src={"https://www.bluebirdgroup.com/asset/51_tahun/Icon_BBG_51th_Bluebird_Group.svg"}
        />
    );
}


