import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { keyframes, css } from "@emotion/react";
import init from "../../init.json";
import banner from "./banner";

function Terminal({ commands }) {
  const [lines, setLines] = useState([
    { value: banner.replace(/M/g, "<span>M</span>"), banner: true },
    ...init.commands
  ]);
  const [command, setCommand] = useState("");
  const [cursorMoves, setCursorMoves] = useState(0);
  const [cursorPaused, setCursorPaused] = useState(true);

  const refInput = React.createRef();
  const refCommands = React.createRef();

  useEffect(() => {
    updateScroll();
  }, [lines]);

  function handleOnFocusSection() {
    refInput.current.focus();
    setCursorPaused(false);
  }

  function handleOnBlurInput() {
    setCursorPaused(true);
  }

  function newLine() {
    const value = refInput.current.value;

    refInput.current.value = "";
    setCommand("");

    return value;
  }

  function execute(command) {
    if (!command) {
      return "";
    }

    const commandResult = commands[command];

    return commandResult || `command "${command}" not found`;
  }

  function updateCursor(key) {
    switch (key) {
      case "ArrowLeft":
        if (command.length > cursorMoves) {
          setCursorMoves(cursorMoves + 1);
        }
        break;
      case "ArrowRight":
        if (cursorMoves > 0) {
          setCursorMoves(cursorMoves - 1);
        }
        break;
      case "Delete":
        if (command.length >= cursorMoves) {
          setCursorMoves(cursorMoves - 1);
        }
        break;
      case "Home":
        setCursorMoves(command.length);
        break;
      case "End":
      case "Enter":
        setCursorMoves(0);
        break;
      default:
        break;
    }
  }

  let timeoutCursor = null;

  function pauseCursor() {
    setCursorPaused(true);

    clearTimeout(timeoutCursor);

    timeoutCursor = setTimeout(() => {
      setCursorPaused(false);
    }, 500);
  }

  function updateScroll() {
    refCommands.current.scrollIntoView(false);
  }

  function handleKeyDown({ key }) {
    pauseCursor();

    updateCursor(key);

    if (key === "Enter") {
      const value = newLine();

      if (value === "clear" || value === "cls") {
        return setLines([]);
      }

      const result = !value
        ? {}
        : value === "banner"
        ? { value: banner.replace(/M/g, "<span>M</span>"), banner: true }
        : { value: execute(value) };

      return setLines([...lines, { value, command: true }, result]);
    }
  }

  function handleChangeInput(event) {
    setCommand(event.target.value);
  }

  function createMarkup(value) {
    return { __html: value };
  }

  function LineValue({ value }) {
    return <div dangerouslySetInnerHTML={createMarkup(value)} />;
  }

  return (
    <TerminalStyled onClick={handleOnFocusSection}>
      <LineStyled>Please enter a domain name</LineStyled>
      <ul ref={refCommands}>
        <>
          {lines.map(({ value, command, banner }, index) => (
            <LineStyled key={index} command={command} banner={banner}>
              <LineValue value={value} />
            </LineStyled>
          ))}
          <LineStyled
            key="command"
            command
            input
            cursorMoves={cursorMoves}
            cursorPaused={cursorPaused}
          >
            {command}
          </LineStyled>
        </>
      </ul>
      <input
        ref={refInput}
        onKeyDown={handleKeyDown}
        onChange={handleChangeInput}
        onBlur={handleOnBlurInput}
      />
    </TerminalStyled>
  );
}

const Color = {
  front: "#DADBDD",
  back: "#353b46",
  alternative: "#F28482"
};

const hidde = css`
  border: 0;
  clip: rect(1px, 1px, 1px, 1px);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`;

const resetListStyle = css`
  margin: 0;
  padding-inline-start: 0;
  list-style: none;
`;

const TerminalStyled = styled.section`
  font-family: Courier New;
  background: ${Color.back};
  width: 100%;
  height: 100%;
  padding: 10px 30px;
  box-sizing: border-box;
  overflow: hidden auto;

  ul {
    display: flex;
    flex-direction: column;
    ${resetListStyle}
  }

  input {
    ${hidde}
  }
`;

const blink = keyframes`
  0%  { opacity: 1 }
	49% { opacity: 1 }
	50% { opacity: 0 }
  100% { opacity: 0 }
`;

const animationBlink = css`
  animation: ${blink} 1s ease infinite;
`;

const fontWidth = 9.6; // Courier New

const LineStyled = styled.li`
  display: block;
  color: ${Color.front};
  min-height: 1rem;
  position: relative;
  word-break: break-all;
  white-space: ${({ banner }) => (banner ? "pre" : "initial")};
  padding-bottom: 0.5rem;

  span {
    color: ${Color.alternative};
  }

  :before {
    content: "$";
    display: ${({ command }) => (command ? "block" : "none")};
    position: absolute;
    left: -15px;
  }

  :after {
    content: "";
    position: absolute;
    width: ${fontWidth}px;
    height: 1rem;
    background: ${Color.front};

    display: ${({ input }) => (input ? "inline-block" : "none")};

    margin-left: ${({ cursorMoves }) =>
      cursorMoves ? `-${cursorMoves * fontWidth}px` : 0};

    ${({ cursorPaused }) => !cursorPaused && animationBlink}
  }
`;

export default Terminal;
