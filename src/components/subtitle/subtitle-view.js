import React from 'react';

import {SubtitleViewWrapper, SubtitlePortion, SubtitleBuffer} from './subtitle-styles';

const SubtitleView = props => {
  let {subtitleTop, subtitleBottom, subtitleBufferTop, subtitleBufferBottom} = props;
  const topIsEmpty = subtitleTop === "" && subtitleBufferTop === "";
  const bottomIsEmpty = subtitleBottom === "" && subtitleBufferBottom === ""
  return (<SubtitleViewWrapper>
    <SubtitlePortion empty={topIsEmpty}>{
        topIsEmpty
          ? "."
          : subtitleTop
      }
      <SubtitleBuffer>{subtitleBufferTop}</SubtitleBuffer>
    </SubtitlePortion>
    <SubtitlePortion empty={subtitleBottom === "" && subtitleBufferBottom === ""}>{
        bottomIsEmpty
          ? "."
          : subtitleBottom
      }
      <SubtitleBuffer>{subtitleBufferBottom}</SubtitleBuffer>
    </SubtitlePortion>
  </SubtitleViewWrapper>)
}

export default SubtitleView;
