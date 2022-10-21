import React, { FC } from "react";

interface DropCardProps {
  imageMain: string,
  imageInfo: string,
}

const DropCard: FC<DropCardProps> = ({ imageMain, imageInfo }) => {
  return (
    <div className="card__drop">
      <div className="card__drop__image">
        <div className="card__drop__image__inner">
          <img src={imageMain} alt="" />
        </div>
      </div>
      <div className="card__drop__info">
        <div className="card__drop__who">
          <div className="card__drop__who__image">
            <div className="card__drop__who__image__inner">
              <img src={imageInfo} alt={'asdas'} />
            </div>
          </div>
          <div className="card__drop__who__name">@dielamaharanie</div>
        </div>
        <div className="card__drop__add_info">
          <div className="card__drop__add_info__title">Last sold</div>
          <div className="card__drop__add_info__value">0.869 LPM</div>
        </div>
        <a href="#/" className="btn__default bnt__y btn__card__drop">Buy</a>
      </div>
    </div>
  )
}

export default DropCard