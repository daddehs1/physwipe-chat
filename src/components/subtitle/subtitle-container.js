import React, {useState, useCallback, useEffect} from 'react';

import SubtitleView from './subtitle-view'
const SubtitleContainer = props => {
  // PROPS

  // STATE, REDUCER
  const [subtitleTop, setSubtitleTop] = useState("");
  const [subtitleBufferTop, setSubtitleBufferTop] = useState("");
  const [subtitleBottom, setSubtitleBottom] = useState("");
  const [subtitleBufferBottom, setSubtitleBufferBottom] = useState("");

  // CALLBACKS, MEMOS
  const initializeSubtitle = useCallback(() => {
    var subtitleText = {
      top: {
        input: "",
        buffer: ""
      },
      bottom: {
        input: "",
        buffer: ""
      }
    }
    var subtitleDuration = {
      top: 350,
      bottom: 0
    }
    const actionTree = {
      top: {
        input: setSubtitleTop,
        buffer: setSubtitleBufferTop
      },
      bottom: {
        input: setSubtitleBottom,
        buffer: setSubtitleBufferBottom
      }
    }
    const modifySubtitle = (text, delay, position, type) => {
      const duration = subtitleDuration[position] + delay;
      const action = actionTree[position][type];
      setTimeout(() => {
        action(text);
      }, duration);
      subtitleText[position][type] = text;
      subtitleDuration[position] += delay;
    }

    const appendToSubtitle = (word, delay, position, type) => {
      const text = subtitleText[position][type];
      const newText = text + word;
      modifySubtitle(newText, delay, position, type);
    }

    const removeFromSubtitle = (numChars, delay, position, type) => {
      const text = subtitleText[position][type];
      const newText = text.substring(0, text.length - numChars);
      modifySubtitle(newText, delay, position, type);
    }

    const simulateSwipe = (path, word, position) => {
      subtitleDuration[position] += 350;
      for (let x = 0; x < path.length; x++) {
        appendToSubtitle(path[x], 45, position, "buffer");
      }
      removeFromSubtitle(path.length, 200, position, "buffer");
      appendToSubtitle(word, 0, position, "input");
    }

    simulateSwipe("asdfgbhn", "an ", "top");
    simulateSwipe("ertyujklkjhgrferfgfdsasxcvbnhgt", "elegant", "top");
    appendToSubtitle(", ", 150, "top", "input");
    simulateSwipe("poiuytredcvhjihgfdse", "precise ", "top");
    simulateSwipe("tresxcft", "text ", "top");
    simulateSwipe("ijnmklpoiuyt", "input", "top");

    subtitleDuration["bottom"] = subtitleDuration["top"];
    simulateSwipe("fghjioiuytr", "for ", "bottom");
    simulateSwipe("tyhgfre", "the ", "bottom");
    simulateSwipe("resdfrt", "reset", "bottom");
    removeFromSubtitle(5, 750, "bottom", "input");
    simulateSwipe("redsft", "reset", "bottom");
    removeFromSubtitle(5, 1250, "bottom", "input");
    appendToSubtitle("r", 600, "bottom", "input");
    appendToSubtitle("e", 150, "bottom", "input");
    appendToSubtitle("s", 150, "bottom", "input");
    appendToSubtitle("t", 150, "bottom", "input");
    appendToSubtitle(" ", 150, "bottom", "input");
    appendToSubtitle("o", 150, "bottom", "input");
    appendToSubtitle("f", 150, "bottom", "input");
    appendToSubtitle(" ", 150, "bottom", "input");
    appendToSubtitle("u", 150, "bottom", "input");
    appendToSubtitle("s", 150, "bottom", "input");
    appendToSubtitle(".", 1000, "bottom", "input");
  }, [])

  // EFFECTS
  useEffect(() => {
    initializeSubtitle();
  }, [initializeSubtitle])

  // VIEW PROPS
  const viewProps = {
    subtitleTop,
    subtitleBottom,
    subtitleBufferTop,
    subtitleBufferBottom
  };
  return <SubtitleView {...viewProps}/>
}

export default SubtitleContainer;
