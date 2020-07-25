import { h, FunctionComponent } from 'preact';

interface Props {
  fillColor?: string;
}

const Name: FunctionComponent<Props> = ({ fillColor = '#0000FF' }: Props) => (
  //   <svg
  //     xmlns="http://www.w3.org/2000/svg"
  //     viewBox="0 0 212.7 25.14"
  //   >
  //     <title>Name1</title>
  //     <g fill={fillColor}>
  //       <path d="M22.07,19.43V14.11s0-2.24-2.84-2.49a4.9,4.9,0,0,0-2.1.37c0,2.61,0,5,0,7a4.5,4.5,0,0,0,1,2.6c-1.67-.1-3.33-.21-5-.33a3.43,3.43,0,0,0,1-2.55V5.27s0-.23,0-.56c-1.56-.09-3.12-.18-4.67-.29V18.36a5.14,5.14,0,0,0,1,2.71c-1.81-.14-3.61-.31-5.41-.49A4,4,0,0,0,6,18V4.18L4,4a1.81,1.81,0,0,0-1.07.31c-.53.39-1.06.76-1.59,1.12C.86,4.27.43,3.09,0,2q6.65.33,13.28.55c.12,0,3.8-2.45,3.8-2.5V11.18c.56-.5,2.89-2.52,4.76-2.44,2.91.19,3,2.75,3,4.11v.25c0,1.63,0,6.67,0,6.57a4.34,4.34,0,0,0,1,2.35c-1.57-.06-3.14-.14-4.71-.22A7.06,7.06,0,0,0,22.07,19.43Z" />
  //       <path d="M26.81,4.32c.81-1.06,1.63-2.17,2.45-3.34a7.7,7.7,0,0,0,2.33,3.51c-.8,1.18-1.59,2.3-2.38,3.37A8.33,8.33,0,0,1,26.81,4.32Zm.07,17.76a2.94,2.94,0,0,0,1-2.24V14a4.23,4.23,0,0,0-1-2.64c1.33-.63,2.67-1.3,4-2,0,4.25,0,7.77,0,10.55a3.73,3.73,0,0,0,1,2.33C30.22,22.2,28.55,22.14,26.88,22.08Z" />
  //       <path d="M45,17c0,3.79-1.74,5.61-5.11,5.6A11,11,0,0,1,36,21.74c-1.06.3-2.3.6-2.3.6V6.17a6.39,6.39,0,0,0-1-3.33C34,2,35.35,1.06,36.68.11V12.36c.5-.45,2.91-2.76,4.48-2.78C43.71,9.64,45,14.12,45,17Zm-3.24.82A8.94,8.94,0,0,0,41,13.7a2.57,2.57,0,0,0-2.08-.89,5.36,5.36,0,0,0-2.22.44v6a3.3,3.3,0,0,0,.12.85c.42,1.31,2.63,1.8,4,1.09C41.43,20.84,41.76,19.48,41.76,17.79Z" />
  //       <path d="M58.06,21.41c-.94.32-1.89.62-2.83.91,0,0-1.14-.13-1.14-1.21v-.34a7.25,7.25,0,0,1-3.77,1.72c-1.58,0-4.09-1.73-4.09-3.35a1.33,1.33,0,0,1,.83-1.23c2.25-1.06,5.16-2.58,6.88-3.52.05-.58-.14-3-.94-3-1.57,0-3.06,1.58-3.79,3.21q-.65-1.7-1.29-3.6a4.45,4.45,0,0,1,5.56-1.23c3.6,1.71,3.64,3.87,3.64,4.39,0,2.21,0,3.84,0,5.56A2,2,0,0,0,58.06,21.41Zm-4-1.3c0-1.38-.09-3-.13-4.74-.38.23-1.24.83-3.36,2.08a1.8,1.8,0,0,0-1,1.52,1.41,1.41,0,0,0,1.13,1.4,6.18,6.18,0,0,0,1.09.07A7.77,7.77,0,0,0,54.09,20.11Z" />
  //       <path d="M67.31,22.15V20.44a8.88,8.88,0,0,1-4.53,2h-.05c-2.91.09-3-1.38-3-2.43V14.1a4.18,4.18,0,0,0-1-2.62c1.25-.71,2.5-1.44,3.74-2.2v9.23s0,2,2.56,1.86a7.58,7.58,0,0,0,2.2-.5v-6a4,4,0,0,0-1-2.56c1.33-.76,2.67-1.54,4-2.34v9.92a2.36,2.36,0,0,0,1,1.87S67.31,22.17,67.31,22.15Z" />
  //       <path d="M73.4,19.31V5.63a5.47,5.47,0,0,0-1-3c0-.05,4-2.56,4-2.55V19.14a4,4,0,0,0,1.06,2.47l-5,.21A3.42,3.42,0,0,0,73.4,19.31Z" />
  //       <path d="M87.16,19.66s-1,1.86-4.6,2c-2.68.13-3.52-1.59-3.5-2.63,0-.76.31-8.38.31-8.61l-1.27.08c1.42-1.71,2.84-3.5,4.25-5.33V8.77l3.09-.19L85,10l-2.56.18v8.67C82.4,20.69,86.46,20,87.16,19.66Z" />
  //       <path d="M102.22,12.09l5.11-.45a5.83,5.83,0,0,0-1.06,3.17V18a7.92,7.92,0,0,1-5.84,2.64c-4.38.12-7.9-1.55-7.9-8.52,0-7.26,3.52-10.55,7.9-10.51A7.46,7.46,0,0,1,106,3.72q-1.39,1.77-2.79,3.62c-1-1.78-2.63-2.89-6.29-2.73-1.15,0-1.71,1.19-1.67,3.32a18.79,18.79,0,0,0,.7,4.7c.91,3.27,2.56,6.22,7,5.94l.29,0V15.07a6,6,0,0,0-1-3Z" />
  //       <path d="M120.89,12.48c0,5.1-2.81,7.42-6.2,7.53s-6.19-1.57-6.19-6.59,2.78-7,6.19-7.25C118.82,5.93,120.89,8.52,120.89,12.48ZM117,10c-.91-1.67-2.67-2-4.62-1.87-.79.06-1.09.54-1.09,1.35a14.49,14.49,0,0,0,1.2,6.19,4.15,4.15,0,0,0,4.41,2.41c.64,0,1.07-.6,1.07-1.71C117.93,14.09,118,11.92,117,10Z" />
  //       <path d="M132.25,16.52a5.38,5.38,0,0,1-4.35,2.78c-3.29.17-5.47-2.38-5.47-7.3,0-3.91,1.69-6.46,5.49-6.68,3-.19,4.1,1.39,4.1,1.4-2,2.28-3.9,4.85-5.84,7.56a1,1,0,0,0,.12.45c1,2.21,2.1,2.35,3.52,2.26A12.13,12.13,0,0,0,132.25,16.52Zm-7.48-7.95a19.07,19.07,0,0,0,1.1,4.69s1.89-3.06,2.32-3.71c1.32-2-.05-2.48-2.24-2.46-.9,0-1.13.51-1.18,1.48Z" />
  //       <path d="M142.13,14.56v-6c0-.09,0-1.95-2.84-1.77a6.14,6.14,0,0,0-2.1.59c0,2.18,0,4.71,0,7.39a8.54,8.54,0,0,0,1,3.63l-5,.22a6.89,6.89,0,0,0,1-3.67V2.9a2,2,0,0,0-1-1.66c0-.06,3.94-1.26,3.94-1.23V6.75c.56-.54,2.89-2.24,4.76-2.3,2.91-.14,3,1.55,3,2.72v.21c0,1,0,6.89,0,7.13a10,10,0,0,0,1,3.63l-4.71.17A17.73,17.73,0,0,0,142.13,14.56Z" />
  //       <path d="M157.45,4.63c-.85.85-1.7,1.78-2.55,2.78a2.36,2.36,0,0,0-2.24-1.15,4.54,4.54,0,0,0-1.61.4c0,2.13,0,4.61,0,7.46a9.59,9.59,0,0,0,1,3.8l-5,.15a7.7,7.7,0,0,0,1-3.75V7.64a2.74,2.74,0,0,0-1-2c1.34-.56,2.67-1.1,4-1.6V5.92a6.19,6.19,0,0,1,4.15-2A2.7,2.7,0,0,1,157.45,4.63Z" />
  //       <path d="M158.13,1.53c.82-.46,1.64-.87,2.45-1.24a7.13,7.13,0,0,0,2.33,1.23c-.79.49-1.58,1-2.38,1.62A6,6,0,0,1,158.13,1.53Zm.08,16.3a8,8,0,0,0,1-3.83V7.43a2.58,2.58,0,0,0-1-2c1.33-.53,2.66-1,4-1.49q0,3.78,0,9.94a9.94,9.94,0,0,0,1,3.9C161.54,17.78,159.88,17.8,158.21,17.83Z" />
  //       <path d="M177.15,17.8q-2.35,0-4.71-.06a18.06,18.06,0,0,0,1-3.93V7.73s0-1.85-2.85-1.85a6.17,6.17,0,0,0-2.16.43q0,3.15.05,7.48a10.15,10.15,0,0,0,1,3.93h-5a8,8,0,0,0,1-3.83V7.2a2.62,2.62,0,0,0-1-2c0-.06,4-1.44,4-1.41V5.71c.53-.44,3-1.94,4.75-1.89s3,.73,3,2.79,0,4.54,0,7.37a11.35,11.35,0,0,0,1,3.82Z" />
  //       <path d="M187.7,5.56a3.83,3.83,0,0,1,1.37,3c0,3.14-2.4,4.37-5.36,4.19a5,5,0,0,1-1.9-.4,1.66,1.66,0,0,0-.26.83c0,.84,1.06,1.51,4.09,1.65s5.65.05,4.87,3.57c-.6,2.65-3.93,6.72-6.7,6.79a5,5,0,0,1-4.88-2.82c1-1.36,1.95-2.65,2.93-3.87,1.38,3.27,5.37,3.69,6.58,2.07.68-.89,0-2.49-6-3.4-3.1-.46-4.18-1.47-4.18-2.47,0-1.33,1.75-2.33,2.88-2.65a5.09,5.09,0,0,1-2.53-4.34c0-2.07,2.43-3.55,5.36-3.44a6.36,6.36,0,0,1,3.09.87,3.81,3.81,0,0,1,3.64-1.63V5.9A4.37,4.37,0,0,0,187.7,5.56Zm-1.26,4.67a6.91,6.91,0,0,0-.4-1.87c-.68-2.09-1.64-2.78-3.49-2.88-.93,0-1.33.26-1.33,1a6.17,6.17,0,0,0,.39,1.75,3.73,3.73,0,0,0,3.85,2.86C186.16,11.1,186.44,10.84,186.44,10.23Z" />
  //       <path d="M201.33,16.88a4.79,4.79,0,0,1-4.35,2.2c-3.29-.11-5.47-3.33-5.47-8.39,0-3.93,1.69-5.92,5.49-5.66a5.2,5.2,0,0,1,4.1,2.06,80.55,80.55,0,0,0-5.84,6.56,1.27,1.27,0,0,0,.12.49c1,2.43,2.11,2.73,3.52,2.84A12.27,12.27,0,0,0,201.33,16.88Zm-7.48-9.2A22.47,22.47,0,0,0,195,12.56s1.88-2.76,2.31-3.32c1.32-1.8-.05-2.48-2.24-2.79-.9-.12-1.13.3-1.18,1.23Z" />
  //       <path d="M212.7,7.56c-.85.93-1.7,1.84-2.56,2.76a3,3,0,0,0-2.23-1.69,3.9,3.9,0,0,0-1.61.15q0,3.48,0,7.29a7.76,7.76,0,0,0,1,3.41l-5-.45a5.75,5.75,0,0,0,1-3.25V9.27a3.62,3.62,0,0,0-1-2.31l4-1.21V8a5.31,5.31,0,0,1,4.15-1.65A2.91,2.91,0,0,1,212.7,7.56Z" />
  // </g>
  // </svg>
  //   <svg
  //   xmlns="http://www.w3.org/2000/svg"
  //   viewBox="0 0 212.7 25.14"
  // >
  //   <title>Name2</title>
  //   <g fill={fillColor}>
  //     <path d="M21.1,21.27A6.06,6.06,0,0,0,22,19.05V13.72c0-.07,0-2.47-3-2.73a5.12,5.12,0,0,0-2.18.39l-.12,0v.14c0,1.31,0,2.57,0,3.76s0,2.27,0,3.29a4.58,4.58,0,0,0,.83,2.44c-1.42-.08-2.84-.18-4.26-.29A3.5,3.5,0,0,0,14,18.38V4.86s0-.23,0-.59l0-.22L8.92,3.78V18a5.24,5.24,0,0,0,.81,2.53q-2.33-.19-4.65-.42a4.35,4.35,0,0,0,.78-2.46v-14L3.65,3.44a2.1,2.1,0,0,0-1.18.35l-1.38,1c-.36-1-.73-2-1.09-3q6.53.31,13.06.52l0,0C13.23,2.21,15.16,1,16.59,0V11.27l.34-.32c.64-.59,2.88-2.47,4.62-2.39,2.78.18,2.78,2.66,2.78,3.86v.26c0,1.24,0,4.95,0,6.09,0,.17,0,.33,0,.49a4.24,4.24,0,0,0,.83,2.2C23.83,21.41,22.47,21.34,21.1,21.27Z" />
  //     <path d="M27,21.55a3.1,3.1,0,0,0,.79-2.1V13.61A4.65,4.65,0,0,0,26.94,11c1.15-.55,2.3-1.13,3.45-1.73,0,4.1,0,7.5,0,10.2a3.76,3.76,0,0,0,.84,2.18ZM28.88,7.09a8.23,8.23,0,0,1-2.12-3.17Q27.84,2.51,28.92,1A8.19,8.19,0,0,0,31,4.08C30.28,5.13,29.58,6.13,28.88,7.09Z" />
  //     <path d="M39.6,22a10.89,10.89,0,0,1-3.83-.81l-.08,0-.09,0c-.76.21-1.6.43-2,.53v-16a7.26,7.26,0,0,0-.84-3.27C33.89,1.69,35,.91,36.19.09V12.44l.33-.32c.11-.06,2.72-2.69,4.34-2.72,2.29,0,3.65,4.18,3.65,7.17C44.51,20.53,42.58,22,39.6,22Zm-1-9.86a5.28,5.28,0,0,0-2.31.46l-.11.06v6.19a3.46,3.46,0,0,0,.13.88A2.71,2.71,0,0,0,39,21.28h0a3.27,3.27,0,0,0,1.59-.35c.78-.43,1.06-2,1.06-3.54a9.37,9.37,0,0,0-.82-4.24A2.72,2.72,0,0,0,38.61,12.17Z" />
  //     <path d="M50,22c-1.53,0-3.89-1.72-3.89-3.21a1.14,1.14,0,0,1,.72-1.06c2.25-1.06,5.14-2.55,6.87-3.51l.11-.05V14a6,6,0,0,0-.62-3,.61.61,0,0,0-.52-.29c-1.62,0-3,1.52-3.77,2.95-.36-1-.72-2-1.08-3.05A4.27,4.27,0,0,1,51,9.08a4.79,4.79,0,0,1,2.09.48c2.3,1.09,3.51,2.56,3.51,4.18v5.58A2.11,2.11,0,0,0,57.41,21c-.83.28-1.66.55-2.48.8A1.09,1.09,0,0,1,54,20.71V20l-.35.29A7,7,0,0,1,50,22Zm.17-5.05a2,2,0,0,0-1.07,1.68,1.57,1.57,0,0,0,1.28,1.55,6.51,6.51,0,0,0,1.14.07,8.78,8.78,0,0,0,2.33-.33l.12-.05c0-1.5-.09-3.23-.14-5.22C52.64,15.41,51.42,16.18,50.2,16.9Z" />
  //     <path d="M62.44,21.88c-2.78.09-2.78-1.36-2.78-2.29v-5.9a4.61,4.61,0,0,0-.85-2.56C59.88,10.52,61,9.9,62,9.26v8.87c0,.06,0,2.15,2.76,2a7.82,7.82,0,0,0,2.27-.5l.13-.05V13.47a4.45,4.45,0,0,0-.84-2.5c1.15-.66,2.3-1.33,3.45-2v9.58a2.53,2.53,0,0,0,.84,1.82c-.47.18-1.61.6-3.39,1.19h0V19.68l-.34.27a8.56,8.56,0,0,1-4.39,1.93Z" />
  //     <path d="M72.52,21.27a3.53,3.53,0,0,0,.79-2.35V5.2a6,6,0,0,0-.86-3C73,1.8,74.64.78,75.86,0V18.78a3.94,3.94,0,0,0,.91,2.31Z" />
  //     <path d="M82.26,21.13a3.51,3.51,0,0,1-2.36-.62A2.38,2.38,0,0,1,79,18.64c0-.73.3-8.3.31-8.61V9.8l-1,.06c1.19-1.45,2.38-3,3.57-4.49V8.63l3-.18-.33,1-2.62.17v8.92c0,1,1,1.4,2.83,1.3a10.71,10.71,0,0,0,1.66-.23A5.82,5.82,0,0,1,82.26,21.13Z" />
  //     <path d="M100.13,20.15c-3.5.05-7.69-.77-7.69-8.37,0-8,4.18-10.35,7.69-10.27a7.27,7.27,0,0,1,5.33,1.9Q104.22,5,103,6.65C101.8,4.73,99.88,3.91,96.64,4h0a1.59,1.59,0,0,0-1.16.55,4.55,4.55,0,0,0-.71,3,18.93,18.93,0,0,0,.72,4.76c.86,3.11,2.46,6.37,7.16,6.08l.42-.05.07-.19V14.73a6,6,0,0,0-.86-2.8l4.36-.38a6.13,6.13,0,0,0-.86,3v3.13A7.78,7.78,0,0,1,100.13,20.15Z" />
  //     <path d="M114.4,19.49c-3.86.18-6-2.13-6-6.41,0-5.52,3.26-6.84,6-7,4.42-.28,6,2.79,6,6.14C120.4,18.1,116.64,19.45,114.4,19.49ZM112.05,7.66q-1.29.11-1.29,1.56A14.6,14.6,0,0,0,112,15.5,4.33,4.33,0,0,0,116.57,18h0a1.16,1.16,0,0,0,1-.56,2.61,2.61,0,0,0,.32-1.38v-.31c0-2.27,0-4.32-1-6.15-.82-1.5-2.39-2.13-4.8-2Z" />
  //     <path d="M127.6,18.78c-3.39.16-5.26-2.62-5.26-7.1,0-2.48.69-6.24,5.29-6.46a4.55,4.55,0,0,1,3.85,1.23c-1.93,2.25-3.86,4.79-5.79,7.48V14a1.23,1.23,0,0,0,.13.54c1,2.31,2.23,2.49,3.71,2.39a9.87,9.87,0,0,0,1.93-.33A4.88,4.88,0,0,1,127.6,18.78ZM125.54,6.63c-1,.07-1.22.82-1.26,1.65h0a15.08,15.08,0,0,0,1.07,4.63l0,.12v.69l.36-.66s1.88-3.06,2.32-3.71c.54-.85.68-1.48.42-1.94s-1.22-.82-2.82-.79Z" />
  //     <path d="M141.17,17.78a16,16,0,0,0,.86-3.5v-6c0-.11,0-2.12-3-1.93a6.62,6.62,0,0,0-2.18.59L136.7,7v.12c0,1.09,0,2.27,0,3.52s0,2.53,0,3.86a8.69,8.69,0,0,0,.83,3.39l-4.26.19a7.25,7.25,0,0,0,.79-3.42v-12A2.12,2.12,0,0,0,133.24,1c.6-.2,2.18-.7,3.41-1V6.91L137,6.6c.64-.61,2.87-2.18,4.62-2.23,2.78-.14,2.78,1.52,2.78,2.55v.21c0,.87,0,4.68,0,6.44v.68a9.86,9.86,0,0,0,.83,3.38Z" />
  //     <path d="M147.16,17.54A8.31,8.31,0,0,0,148,14V7.37a3,3,0,0,0-.84-1.95c1.15-.48,2.3-.94,3.45-1.37v2.1l.35-.38a6,6,0,0,1,4-1.89,2.82,2.82,0,0,1,2,.52c-.76.75-1.52,1.56-2.28,2.44a2.56,2.56,0,0,0-2.26-1,4.7,4.7,0,0,0-1.69.4l-.12,0q0,3.21,0,7.56a9.75,9.75,0,0,0,.84,3.56Q149.29,17.46,147.16,17.54Z" />
  //     <path d="M158.31,17.31a8.65,8.65,0,0,0,.79-3.57V7.18a2.76,2.76,0,0,0-.83-1.95c1.15-.45,2.29-.88,3.44-1.28,0,2.45,0,5.68,0,9.67a10.15,10.15,0,0,0,.83,3.64ZM160.2,2.77a6.39,6.39,0,0,1-2.12-1.4q1.08-.6,2.16-1.08a7.93,7.93,0,0,0,2.06,1.08C161.6,1.79,160.9,2.26,160.2,2.77Z" />
  //     <path d="M172.44,17.23a16.41,16.41,0,0,0,.87-3.66V7.49s0-2-3.05-2a6,6,0,0,0-2.24.44l-.12,0q0,3.17,0,7.57a10.38,10.38,0,0,0,.84,3.67h-4.26a8.68,8.68,0,0,0,.79-3.58V7A2.78,2.78,0,0,0,164.47,5c.58-.24,2.18-.81,3.41-1.21V5.85l.33-.25a9.19,9.19,0,0,1,4.62-1.85c1.83,0,2.84.82,2.84,2.62,0,1,0,2.17,0,3.39s0,2.55,0,4a11.21,11.21,0,0,0,.84,3.56Z" />
  //     <path d="M183.52,24.61a4.75,4.75,0,0,1-4.61-2.49c.87-1.22,1.75-2.39,2.62-3.49a5,5,0,0,0,4.3,2.85,2.92,2.92,0,0,0,2.46-1,1.26,1.26,0,0,0,.23-1.1c-.34-1.22-2.53-2.17-6.36-2.75-2.54-.38-4-1.19-4-2.21s1.6-2.13,2.73-2.45l.5-.14-.47-.27a4.86,4.86,0,0,1-2.41-4.13c0-2,2.46-3.37,5.16-3.26a6,6,0,0,1,3,.83l.19.11a.86.86,0,0,0,.1-.16,3.58,3.58,0,0,1,3.27-1.56v2a4.61,4.61,0,0,0-1.48-.34,4.92,4.92,0,0,0-1.37.12l-.31.07.23.2a3.63,3.63,0,0,1,1.31,2.81c-.05,3.33-2.84,4.13-5.16,4a5.14,5.14,0,0,1-1.83-.38l-.15-.07a1,1,0,0,0-.08.14,1.75,1.75,0,0,0-.3.95c0,1.13,1.4,1.77,4.29,1.9l1,.05c1.63.09,3,.23,3.55,1.08A3,3,0,0,1,190,18C189.44,20.6,186.18,24.55,183.52,24.61ZM182.25,5.09c-1,0-1.52.3-1.52,1.12a6,6,0,0,0,.4,1.8,4,4,0,0,0,4,3,1.15,1.15,0,0,0,.92-.26,1,1,0,0,0,.26-.77,6.82,6.82,0,0,0-.41-1.92C185.22,5.89,184.19,5.19,182.25,5.09Z" />
  //     <path d="M196.69,18.57c-3.4-.14-5.27-3.54-5.27-8.12,0-2.55.69-5.89,5.29-5.49a5.09,5.09,0,0,1,3.85,1.84,77.48,77.48,0,0,0-5.79,6.5v.07a1.56,1.56,0,0,0,.14.58c1,2.55,2.22,2.89,3.7,3a11.44,11.44,0,0,0,1.94-.05A4.47,4.47,0,0,1,196.69,18.57ZM194.62,6c-1-.08-1.22.6-1.26,1.4h0a17.1,17.1,0,0,0,1.07,4.8.56.56,0,0,1,0,.12v.72l.36-.62s1.88-2.76,2.32-3.32c.55-.75.69-1.35.42-1.85s-1.21-1-2.81-1.23Z" />
  //     <path d="M202.41,18.57a6.23,6.23,0,0,0,.79-3V9a4,4,0,0,0-.84-2.24l3.45-1V8.18l.35-.35a5.13,5.13,0,0,1,4-1.62,2.88,2.88,0,0,1,2,1L209.88,9.7a3.13,3.13,0,0,0-2.26-1.53,4,4,0,0,0-1.69.15l-.12,0c0,2.35,0,4.82,0,7.42a7.83,7.83,0,0,0,.84,3.17C205.25,18.81,203.83,18.69,202.41,18.57Z" /></g>
  //   </g>
  //   </svg>
  // <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 232.54 24.49">
  //   <title>Name3</title>
  //   <g fill={fillColor}>
  //     <path d="M15.47,1c-.31,1.4-.62,4.05-.86,5.84h-1a12.93,12.93,0,0,0-.18-2.19c-.19-1.11-.63-1.58-2.29-1.64L9.62,3C8.83,7.8,8,12,7.25,15.92,6.89,17.69,7,18,9.44,18.41l-.21.8Q5,18.82.83,18.33L1,17.45c2.21.12,2.42-.22,2.78-2,.81-4,1.61-8.07,2.42-12.67l-1.09,0c-1.93-.1-2.39.18-2.94.9a10.27,10.27,0,0,0-1.2,2L0,5.51A39.36,39.36,0,0,0,1.17.8l.7,0c.29.57.52.58,1.22.6,3.44.11,6.89.19,10.33.27.65,0,.72-.08,1.27-.68Z" />
  //     <path d="M17.13,1.25A21.91,21.91,0,0,0,21,.29,6.29,6.29,0,0,1,21.94,0c.32,0,.37.44.24,1.24-.6,4.11-1.35,8.43-2,11.46,1.46-1.95,3.93-4.22,5.77-4.15,1,0,2,.85,1.23,4.64-.34,1.5-.81,3.33-1.15,4.55-.15.59-.13.83.08.85a3.29,3.29,0,0,0,1.64-.91c.15.25.29.51.44.75a7.39,7.39,0,0,1-4.63,2.07c-.88-.06-1.27-.47-.8-2.21.46-1.59,1-3.64,1.37-5.35.34-1.35.21-1.83-.23-1.85-.94-.07-2.29,1.11-3.41,3a7.56,7.56,0,0,0-1,2.44c-.26,1-.58,2.44-.73,3.22a28,28,0,0,0-3.1.25l-.15-.21a144.39,144.39,0,0,0,3-15.64c.19-1.39.08-1.51-.85-1.67-.24,0-.65-.12-.78-.12C17,2,17.06,1.63,17.13,1.25Z" />
  //     <path d="M36.22,18.74a6.81,6.81,0,0,1-4.55,2.11c-.86,0-1.33-.58-.91-2.09.49-1.73,1.09-3.91,1.48-5.83.18-.82.15-1.1-.08-1.11a3.32,3.32,0,0,0-1.43.9l-.39-1c1.74-1.85,3.59-2.91,4.55-2.88S36,10,35.41,12.74c-.39,1.81-1,4-1.35,5.39-.18.56-.18.86,0,.87a3.73,3.73,0,0,0,1.69-1C35.92,18.26,36.07,18.5,36.22,18.74ZM36.66,4c0,1.49-.78,2.79-1.92,2.76-.94,0-1.59-.82-1.59-2.23,0-1.22.7-2.86,2-2.86C36.19,1.65,36.66,2.76,36.66,4Z" />
  //     <path d="M39.83,1.44A24.35,24.35,0,0,0,43.7.33a4.69,4.69,0,0,1,1-.33c.31,0,.34.49.23,1.29-.68,4.32-1.35,8.4-2.08,11.8,1.09-1.58,3.46-4,5.28-4,1.64,0,2.16,2.19,2.16,3.9a7.6,7.6,0,0,1-4,7A9.53,9.53,0,0,1,42,21.09a3.93,3.93,0,0,1-2.42-.62c-.75-.61-.93-1.34-.44-3.6.6-3.05,1.33-6.68,2.13-12.07.24-1.66.11-1.84-.85-2-.26,0-.6-.11-.76-.12Zm7.05,12.07c0-1.24-.32-1.85-.86-1.84s-1.51.55-2.78,2.34A9,9,0,0,0,42,17.53c-.49,2.17.34,2.62,1.28,2.66C45,20.23,46.85,17.43,46.88,13.51Z" />
  //     <path d="M64.79,18.62A6.9,6.9,0,0,1,60.37,21c-.86,0-1.3-.43-.83-2.5q.09-.39.18-.81a10.21,10.21,0,0,1-2.81,2.54,4.76,4.76,0,0,1-2.55.85c-1.09,0-2-.66-2-2.44a11.25,11.25,0,0,1,2.86-7A8.16,8.16,0,0,1,60.68,9a23.28,23.28,0,0,1,3.64.5c-.52,2.62-1.38,6.87-1.74,8.67-.1.57-.08.87.13.86A3.5,3.5,0,0,0,64.35,18C64.5,18.19,64.64,18.41,64.79,18.62Zm-5.51-1.74a6.78,6.78,0,0,0,1.09-2.47c.23-1.12.55-2.64.65-3.49a3.51,3.51,0,0,0-1.66-.4c-2.4.12-3.57,5.19-3.51,7.49,0,.92.28,1.26.65,1.26C57.07,19.25,58,18.68,59.28,16.88Z" />
  //     <path d="M79.3,18.1a6.55,6.55,0,0,1-4.45,2.54c-.93,0-1.25-.55-.83-2.27.1-.43.18-.76.29-1.2a13,13,0,0,1-2.84,2.71,5.14,5.14,0,0,1-2.62,1c-1,0-2.08-.27-1.36-3,.37-1.41.78-3,1.23-5.18.15-.72.15-1-.08-1A4.94,4.94,0,0,0,67,12.93L66.64,12c1.56-2,3.51-3.29,4.52-3.31s1.22.93.65,3.69c-.36,1.72-.81,3.37-1.2,5.09-.28,1.06-.1,1.41.29,1.4.73,0,1.82-1,2.73-2.23a9.2,9.2,0,0,0,1.46-3.33c.23-1,.46-2.29.75-3.91.86-.32,2-.71,2.89-1l.36,0c-.65,3.23-1.56,7.19-2,9.23-.1.61-.1.85.1.84s.73-.2,1.59-1.07Z" />
  //     <path d="M87.33,17.68a7.21,7.21,0,0,1-4.5,2.64c-.85,0-1.37-.31-.88-2.48.73-3.08,1.74-8.53,2.52-13.59.24-1.47.08-1.62-.86-1.74-.23,0-.62-.1-.75-.09.08-.38.16-.75.23-1.13a20.07,20.07,0,0,0,3.9-1A2.36,2.36,0,0,1,87.9,0c.32,0,.34.39.21,1.21-1,6.26-2.31,13.32-3,16-.13.6-.13.85.08.84A3.89,3.89,0,0,0,86.86,17Z" />
  //     <path d="M97.08,9.11c-.39.08-1.74.25-2.47.32-1.22,6.35-1.17,5.76-1.43,7.26-.18.91-.05,1.08.18,1.07a4.11,4.11,0,0,0,2.16-1.52l.42.73c-1,1.37-3.07,2.89-4.68,3-1.22,0-1.74-.61-1.12-3.24.49-2.15,1-4.52,1.46-7.07l-2,.12,0-.26.8-1.25,1.56-.09q.28-1.54.57-3.18A23.25,23.25,0,0,0,95.57,2.7L96,3c-.28,1.14-.78,3.49-1.06,5l2.75-.16Z" />
  //     <path d="M119.75,5.93c0-3.25-1.87-3.83-3.77-3.79-3.79,0-6.94,4.27-6.94,9.68,0,4.18,1.72,6,4.4,5.86a2.23,2.23,0,0,0,2.28-2l.39-2c.37-2,.11-2.06-2.39-2.13l.24-.93L121.7,10c-.07.31-.13.62-.2.94-1.43.27-1.59.43-2,2.44-.13.69-.25,1.38-.37,2.07a8.61,8.61,0,0,0-.15,2,21.4,21.4,0,0,1-5.65,1.35c-5,.24-8.19-2-8.19-6.77A10.8,10.8,0,0,1,116.32,1a27.81,27.81,0,0,1,5.12.53,42.94,42.94,0,0,0-.67,4.28Z" />
  //     <path d="M135.07,9.19a9.18,9.18,0,0,1-3.77,7.36,7,7,0,0,1-3.54,1.33c-3.12.16-4-2.24-4-4.18a8.06,8.06,0,0,1,4.78-7.59,7.94,7.94,0,0,1,2.6-.63C133.79,5.34,135.07,6.75,135.07,9.19Zm-7.86,4.41c0,2.05.63,3,1.62,3,1.79-.11,2.86-4.23,2.86-7.3,0-2-.63-2.72-1.56-2.66C127.84,6.7,127.22,11.6,127.21,13.6Z" />
  //     <path d="M140.68,17.18c-1.58.1-3.27-.88-3.27-4.15a8.36,8.36,0,0,1,3-6.65,8.41,8.41,0,0,1,4.16-1.63c1.9-.09,2.75.74,2.75,1.83,0,2.45-3.95,3.84-6.52,4.5,0,.24-.06.83-.06,1,0,1.4.42,2.7,1.83,2.62s2.57-1,3.82-2.47c.14.29.27.58.41.88C144.87,15.78,142.66,17.1,140.68,17.18Zm.21-7.1c2.71-.83,3.54-1.95,3.54-3.19a.9.9,0,0,0-1-1C142.71,5.93,141.39,6.58,140.89,10.08Z" />
  //     <path d="M150.33.57c1.69-.14,3-.33,3.87-.45.45-.06.78-.12.94-.12.31,0,.36.17.23.5a71.13,71.13,0,0,0-2,7.28c1.45-1.95,3.92-3.61,5.77-3.66,1,0,2,.15,1.22,3.32-.34,1.3-.8,3.25-1.14,4.84-.16.76-.13,1.09.08,1.08A3.87,3.87,0,0,0,161,12l.45.92c-1.51,2.11-3.64,3.53-4.63,3.55s-1.28-.7-.81-3.08c.47-2.16,1-4.37,1.38-5.86.34-1.19.21-1.49-.23-1.48-.94,0-2.29,1-3.41,3a8.16,8.16,0,0,0-1,2.69c-.26,1.19-.57,3.08-.73,4.25a20.61,20.61,0,0,0-3.09.82l-.16-.27c1.07-5.9,2-10.67,3-14.51.18-.75.08-.78-.86-.84l-.78,0Z" />
  //     <path d="M163.35,6.13a6.78,6.78,0,0,1,4.22-2.27c.93,0,1.27.7.65,3.07-.05.17-.09.35-.13.53,1.3-2.21,2.88-3.68,4.16-3.7.86,0,1.43.5,1.43,1a2.94,2.94,0,0,1-1.33,2c-.29.17-.49.17-.65,0a1.89,1.89,0,0,0-1.12-.66c-.75,0-2.08,2.18-2.36,2.84a28.34,28.34,0,0,0-1.51,6.5,15,15,0,0,0-3,.8l-.21-.29c.65-3.35,1.4-6.78,1.77-8.49.34-1.47.26-1.6.05-1.6a4.22,4.22,0,0,0-1.59,1Q163.55,6.48,163.35,6.13Z" />
  //     <path d="M181.27,12.43c-1.64,2.32-3.49,3.55-4.55,3.54-.86,0-1.33-1-.91-3.19.49-2.45,1.09-4.72,1.48-6.26.18-.67.16-.86-.08-.86a3.6,3.6,0,0,0-1.43.76l-.39-.71a8.32,8.32,0,0,1,4.55-2c.89,0,1.1.49.52,2.57-.39,1.4-1,3.65-1.35,5.5-.18.73-.18,1.17,0,1.17s.85-.45,1.69-1.42Zm.44-11.13c0,.57-.78,1.21-1.92,1.22-.94,0-1.59-.39-1.59-1s.7-1.06,2-1.06C181.24.49,181.71.83,181.71,1.3Z" />
  //     <path d="M196.09,12.58c-1.64,2.33-3.49,3.45-4.47,3.42s-1.36-.85-.86-3.7c.31-1.87.83-3.92,1.22-5.36.31-1.14.1-1.42-.26-1.44-.7,0-2.24,1.07-3.41,3a7.89,7.89,0,0,0-.93,2.55c-.26,1.23-.55,2.71-.78,4.13a13.64,13.64,0,0,0-3,.73l-.21-.31c.62-3.43,1.33-6.55,2-9.22.18-.68.13-.87-.08-.87a3.82,3.82,0,0,0-1.56.89l-.39-.72a6.5,6.5,0,0,1,4.11-2c1,0,1.37.64.8,2.87l-.21.78c1.46-2,4-3.6,5.91-3.55,1,.08,1.87.23,1.06,3.3-.34,1.26-.8,3.29-1.09,4.78-.13.76-.13,1.1.08,1.1s.88-.35,1.66-1.32Q195.88,12.09,196.09,12.58Z" />
  //     <path d="M201.91,12a1,1,0,0,0-.15.51c0,.41.52.86,1.79,1.62,2.94,1.81,3.93,3,3.93,4.66,0,3-3.93,5.67-6.87,5.69s-5-2-5-4.31c0-1.81,2.15-3.42,4.16-4.48a2.16,2.16,0,0,1-.86-1.62c0-.72.91-1.59,2-2.2ZM198.27,8.6a4.22,4.22,0,0,1,2.84-4,8.19,8.19,0,0,1,3.22-.51,5.12,5.12,0,0,1,2.57.69,7.57,7.57,0,0,0,2.94-.33c.11.16.21.33.31.5a3.65,3.65,0,0,1-2.47,1.19,2.49,2.49,0,0,1,.16.91A4.61,4.61,0,0,1,206,10.58a7.65,7.65,0,0,1-4.57,1.49A3.27,3.27,0,0,1,198.27,8.6Zm6.32,11.82a2.76,2.76,0,0,0-1.09-2,20.38,20.38,0,0,0-2.86-2c-1.67,1.27-2,2.39-2,3.22a3.25,3.25,0,0,0,3.3,3C203.6,22.62,204.59,21.62,204.59,20.42Zm.21-13.9c0-1-.26-1.6-1.07-1.64-1.32-.08-2.34,2.05-2.34,4.17,0,1,.39,1.79,1.07,1.82C203.81,10.93,204.8,8.49,204.8,6.52Z" />
  //     <path d="M213.56,16.84c-1.59-.06-3.27-1.33-3.28-4.73,0-2.67,1-5,3-6.17a7.86,7.86,0,0,1,4.16-1.06c1.9.14,2.76,1.14,2.76,2.27,0,2.53-3.95,3.21-6.53,3.48,0,.24,0,.83,0,1,0,1.42.42,2.82,1.82,2.93a5.16,5.16,0,0,0,3.82-1.87l.42.92C217.75,15.91,215.54,17,213.56,16.84Zm.21-7.19c2.7-.4,3.53-1.38,3.53-2.64a1.06,1.06,0,0,0-1-1.18C215.59,5.82,214.26,6.25,213.77,9.65Z" />
  //     <path d="M222.22,7.7c1.43-1.35,3-2.13,4.21-2,.94.11,1.27,1.17.65,3.66,0,.18-.09.36-.13.54,1.3-2.09,2.89-3.82,4.16-3.68a1.65,1.65,0,0,1,1.43,1.57,2.68,2.68,0,0,1-1.33,2.07.47.47,0,0,1-.65-.1c-.41-.5-.78-.88-1.11-.93-.76-.1-2.08,2-2.37,2.61a25.88,25.88,0,0,0-1.51,5.76,14.43,14.43,0,0,0-3,.35l-.21-.28c.65-2.89,1.41-6.07,1.77-7.83.34-1.5.26-1.69.05-1.72a3.71,3.71,0,0,0-1.58.83Z" />
  //   </g>
  // </svg>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 212.7 26.85">
    <title>Name4</title>
    <g fill={fillColor}>
      <path d="M22.07,22.68V17c0-.08,0-2.09-2.84-2.34a5.38,5.38,0,0,0-2.1.31c0,2.4,0,4.86,0,7.21a6.64,6.64,0,0,0,1,3.18c-1.67-.15-3.33-.33-5-.52a4.5,4.5,0,0,0,1-3V9.08s0-.18,0-.46c-1.56-.17-3.12-.36-4.67-.57v13.4a6.65,6.65,0,0,0,1,3.09c-1.81-.23-3.61-.49-5.41-.76A4.39,4.39,0,0,0,6,21V7.57L4,7.26a1.83,1.83,0,0,0-1.07.21l-1.59,1L0,4.85Q6.65,6,13.28,6.78c.12-.06,3.8-1.53,3.8-1.54v9c.56-.47,2.88-2.15,4.76-2,2.91.22,3,2.34,3,3.61v.23c0,1.31,0,6.78,0,6.85a7.22,7.22,0,0,0,1,3.05c-1.57-.1-3.14-.22-4.71-.34A11.63,11.63,0,0,0,22.07,22.68Z" />
      <path d="M26.81,9,29.26,6.8a6.52,6.52,0,0,0,2.33,2.51l-2.38,2.44A6.87,6.87,0,0,1,26.81,9Zm.07,17.07a4.77,4.77,0,0,0,1-2.94V17a3.49,3.49,0,0,0-1-2.38c1.33-.53,2.67-1.07,4-1.62l0,10.26a6.51,6.51,0,0,0,1,3.12C30.22,26.28,28.55,26.2,26.88,26.09Z" />
      <path d="M45,19.88c0,3.92-1.74,7-5.11,7A8.43,8.43,0,0,1,36,25.63c-1.06.42-2.3.86-2.3.86V10.58a3.6,3.6,0,0,0-1-2.39c1.33-.55,2.67-1.12,4-1.69v9c.5-.41,2.91-2.29,4.48-2.27C43.71,13.29,45,16.85,45,19.88Zm-3.24.88a8.06,8.06,0,0,0-.78-4,2.66,2.66,0,0,0-2.08-.79,5.51,5.51,0,0,0-2.22.38v6.13a4.94,4.94,0,0,0,.12,1,2.62,2.62,0,0,0,4,1.41C41.43,24.37,41.76,22.57,41.76,20.76Z" />
      <path d="M58.06,25.17l-2.83,1.3a1.61,1.61,0,0,1-1.14-1.71V24.3c-.51.54-2.33,2.41-3.77,2.43s-4.09-2.61-4.09-4.46a1.48,1.48,0,0,1,.83-1.38c2.25-1.17,5.16-2.66,6.88-3.54.05-.57-.14-2.68-.94-2.66a4.71,4.71,0,0,0-3.79,2.85l-1.29-3.15a5.23,5.23,0,0,1,5.56-1c3.6,1.32,3.65,3.25,3.64,3.75,0,2.07,0,3.78,0,5.85A2.94,2.94,0,0,0,58.06,25.17Zm-4-1.71c0-1.72-.09-3.45-.13-5.18L50.6,20.4a2,2,0,0,0-1,1.68,1.74,1.74,0,0,0,1.13,1.71,5.32,5.32,0,0,0,1.09.08A6.15,6.15,0,0,0,54.09,23.46Z" />
      <path d="M67.31,26.18V23.91c-.53.53-2.66,2.56-4.53,2.67h-.05c-2.91.13-3-2-3-3.27V17.06a3.31,3.31,0,0,0-1-2.31l3.74-1.87v8.7a2.25,2.25,0,0,0,2.56,2.23,6.35,6.35,0,0,0,2.2-.61V16.82a3.32,3.32,0,0,0-1-2.3c1.33-.67,2.67-1.35,4-2v9.57a3.22,3.22,0,0,0,1,2.26S67.31,26.19,67.31,26.18Z" />
      <path d="M73.4,22.54V9.71a3.22,3.22,0,0,0-1-2.26s4-2.08,4-2.08v17a5.72,5.72,0,0,0,1.06,3l-5,.33A5.19,5.19,0,0,0,73.4,22.54Z" />
      <path d="M87.16,22.91s-1,2.16-4.6,2.43a3.08,3.08,0,0,1-3.5-3.13c0-1.17.31-8.65.31-8.65l-1.27.09Q80.23,11.33,82.35,9v3.06l3.09-.24L85,13.14l-2.56.2v8.72C82.4,24.12,86.46,23.24,87.16,22.91Z" />
      <path d="M102.22,15l5.11-.45a5.83,5.83,0,0,0-1.06,3.18v3.21a8.31,8.31,0,0,1-5.84,2.84c-4.38.39-7.9-1.77-7.9-8.7S96.05,5.34,100.43,5A6.89,6.89,0,0,1,106,6.63l-2.79,3.67c-1-1.74-2.63-2.73-6.29-2.41C95.79,8,95.23,9,95.27,11a18,18,0,0,0,.7,4.53c.91,3.23,2.56,6.39,7,6l.29,0V18a6,6,0,0,0-1-3Z" />
      <path d="M120.89,15.38c0,4.93-2.81,6.95-6.2,7.25s-6.19-1.28-6.19-6.31,2.78-7.1,6.19-7.4C118.81,8.56,120.89,11.48,120.89,15.38ZM117,12.93c-.91-1.72-2.67-2.07-4.62-1.91-.79.07-1.09.57-1.09,1.39a14.13,14.13,0,0,0,1.2,6.16c.85,1.79,2.45,2.39,4.41,2.23.64,0,1.07-.59,1.07-1.63C117.93,17,118,14.84,117,12.93Z" />
      <path d="M132.25,19a5.63,5.63,0,0,1-4.35,2.5c-3.29.25-5.47-1.76-5.47-6.59,0-3.84,1.68-6.78,5.49-7.07A4.33,4.33,0,0,1,132,9.42q-2.93,3.81-5.84,7.65a1,1,0,0,0,.12.42c1,2,2.1,2.06,3.52,2A14.65,14.65,0,0,0,132.25,19Zm-7.48-7.58a17.51,17.51,0,0,0,1.1,4.7s1.89-3,2.32-3.67c1.32-2.12-.05-2.65-2.24-2.61-.9,0-1.13.56-1.18,1.58Z" />
      <path d="M142.13,17.11V11.47c0-.07,0-2.1-2.84-1.93a5.79,5.79,0,0,0-2.1.65c0,2.4,0,4.85,0,7.2a5.88,5.88,0,0,0,1,3l-5,.35a5.21,5.21,0,0,0,1-3.16V4.78a3.23,3.23,0,0,0-1-2.26s3.94-2.1,3.94-2.1v9c.56-.58,2.89-2.62,4.76-2.73,2.91-.17,3,1.95,3,3.22v.23c0,1.31,0,6.77,0,6.85a6.57,6.57,0,0,0,1,2.94l-4.71.26A12.46,12.46,0,0,0,142.13,17.11Z" />
      <path d="M157.45,7l-2.55,3.26A2.39,2.39,0,0,0,152.66,9a4.11,4.11,0,0,0-1.61.45l0,7.22a6.14,6.14,0,0,0,1,3c-1.67.06-3.34.14-5,.22a5.23,5.23,0,0,0,1-3.06V10.47a3.43,3.43,0,0,0-1-2.28l4-2V8.54c.53-.65,2.12-2.39,4.15-2.46A2.43,2.43,0,0,1,157.45,7Z" />
      <path d="M158.13,2.41,160.58,0a5.87,5.87,0,0,0,2.33,2.36L160.53,5A6.24,6.24,0,0,1,158.13,2.41Zm.08,17.07a5.09,5.09,0,0,0,1-3V10.27a3.27,3.27,0,0,0-1-2.3l4-1.9,0,10.25a6.22,6.22,0,0,0,1,3.07C161.54,19.41,159.88,19.44,158.21,19.48Z" />
      <path d="M177.15,19.46c-1.57,0-3.14-.08-4.71-.1a10.56,10.56,0,0,0,1-3.08V10.6s0-2-2.85-2.07a5.45,5.45,0,0,0-2.16.5q0,3.62.05,7.21a6.26,6.26,0,0,0,1,3.09c-1.67,0-3.34,0-5,0a5.08,5.08,0,0,0,1-3V10a3.41,3.41,0,0,0-1-2.32s4-1.84,4-1.84V8.33c.53-.49,3-2.45,4.75-2.41s3,1.09,3,3.44,0,4.72,0,7.07a7.12,7.12,0,0,0,1,3Z" />
      <path d="M187.7,8.1a4.75,4.75,0,0,1,1.37,3.29c0,3.23-2.4,4.17-5.36,4a5.58,5.58,0,0,1-1.9-.37,1.36,1.36,0,0,0-.26.73c0,.72,1.06,1.28,4.09,1.46s5.65.22,4.87,3c-.6,2.14-3.93,4.71-6.7,4.58s-4.1-1-4.88-2.09L181.86,20c1.38,2.44,5.37,2.89,6.58,1.78.68-.62,0-1.93-6-2.78-3.1-.42-4.18-1.21-4.18-2,0-1.09,1.75-2,2.88-2.26a4.67,4.67,0,0,1-2.53-4.24c0-2.2,2.43-4.23,5.36-4.07a5.59,5.59,0,0,1,3.09,1.09,3.62,3.62,0,0,1,3.64-2.09V8.5A3.73,3.73,0,0,0,187.7,8.1Zm-1.26,5a7.44,7.44,0,0,0-.4-1.88C185.36,9,184.4,8.12,182.55,8c-.93,0-1.33.33-1.33,1.14a6.83,6.83,0,0,0,.39,1.91c.68,2.16,2,2.72,3.85,2.83C186.16,14,186.44,13.71,186.44,13.12Z" />
      <path d="M201.33,19.44A4.54,4.54,0,0,1,197,21.12c-3.29-.34-5.47-2.71-5.47-7.54,0-3.83,1.69-6.51,5.49-6.12a5.38,5.38,0,0,1,4.1,2.37q-2.92,3.24-5.84,6.56a1.05,1.05,0,0,0,.12.44,3.69,3.69,0,0,0,3.52,2.61A14.09,14.09,0,0,0,201.33,19.44Zm-7.48-9a19.67,19.67,0,0,0,1.11,4.9s1.88-2.64,2.31-3.26c1.32-1.87-.05-2.66-2.24-3-.9-.14-1.13.36-1.18,1.38Z" />
      <path d="M212.7,10.46l-2.56,2.75a3.07,3.07,0,0,0-2.23-1.73,3.59,3.59,0,0,0-1.61.15l0,7.22a7,7,0,0,0,1,3.22q-2.51-.37-5-.69a4.53,4.53,0,0,0,1-2.88V12.15a4.06,4.06,0,0,0-1-2.46c1.34-.44,2.67-.86,4-1.27v2.35a5,5,0,0,1,4.15-1.66A3.13,3.13,0,0,1,212.7,10.46Z" />
    </g>
  </svg>
  // <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 212.16 26.18">
  //   <title>Name5</title>
  //   <g fill={fillColor}>
  //     <path d="M21.1,25A9.9,9.9,0,0,0,22,22.23V16.58c0-.09,0-2.29-3-2.55a5.62,5.62,0,0,0-2.18.32l-.12,0v.13c0,1.21,0,2.43,0,3.65s0,2.4,0,3.57a6.79,6.79,0,0,0,.83,3c-1.42-.13-2.84-.28-4.26-.44a4.73,4.73,0,0,0,.79-2.8V8.64a4,4,0,0,0,0-.49L14,8c-1.68-.18-3.36-.38-5.05-.61V21a6.69,6.69,0,0,0,.81,2.86c-1.55-.2-3.1-.41-4.65-.65a4.82,4.82,0,0,0,.78-2.61V6.94L3.65,6.6a2.11,2.11,0,0,0-1.18.23l-1.38.85c-.36-1-.73-2-1.09-3Q6.53,5.79,13.06,6.53l0,0c.12-.06,2.05-.83,3.48-1.41v9.17l.34-.29c.64-.55,2.88-2.1,4.62-2,2.78.21,2.78,2.27,2.78,3.39v.23c0,1.06,0,4.81,0,6.27,0,.2,0,.39,0,.58a7,7,0,0,0,.83,2.84C23.83,25.23,22.47,25.13,21.1,25Z" />
  //     <path d="M27,25.44a5.12,5.12,0,0,0,.79-2.76V16.51a3.83,3.83,0,0,0-.84-2.32c1.15-.45,2.3-.92,3.45-1.39,0,3.32,0,6.63,0,10a6.6,6.6,0,0,0,.84,2.91C29.83,25.6,28.41,25.53,27,25.44ZM28.88,11A6.83,6.83,0,0,1,26.76,8.6l2.16-1.95A6.91,6.91,0,0,0,31,8.87Z" />
  //     <path d="M39.6,26.18A8.3,8.3,0,0,1,35.77,25l-.08-.05-.09,0c-.76.3-1.6.61-2,.76V10.11a3.91,3.91,0,0,0-.84-2.32l3.45-1.46v9.16l.33-.28c.11-.09,2.72-2.24,4.34-2.22,2.29,0,3.65,3.27,3.65,6.42C44.51,23.55,42.58,26.23,39.6,26.18Zm-1-10.92a5.92,5.92,0,0,0-2.31.4l-.11.05V22a5.18,5.18,0,0,0,.13,1.08,2.8,2.8,0,0,0,2.7,2h0a2.59,2.59,0,0,0,1.59-.49c.78-.63,1.06-2.63,1.06-4.3,0-1.41-.21-3.35-.82-4.15A2.92,2.92,0,0,0,38.61,15.26Z" />
  //     <path d="M50,26.06c-1.53,0-3.89-2.57-3.89-4.26a1.28,1.28,0,0,1,.72-1.2c2.25-1.17,5.14-2.66,6.87-3.54l.11,0v-.12a4.56,4.56,0,0,0-.62-2.63.69.69,0,0,0-.52-.24,4.79,4.79,0,0,0-3.77,2.57L47.86,14A4.71,4.71,0,0,1,51,12.72a5.66,5.66,0,0,1,2.09.37c2.3.85,3.51,2.07,3.51,3.56v5.86a3.27,3.27,0,0,0,.78,2.15l-2.48,1.13A1.43,1.43,0,0,1,54,24.28v-1l-.35.37C53.14,24.25,51.37,26,50,26.06Zm.17-6.3a2.15,2.15,0,0,0-1.07,1.85,1.92,1.92,0,0,0,1.28,1.9,4.92,4.92,0,0,0,1.14.09,6.43,6.43,0,0,0,2.33-.42l.12-.06c0-1.88-.09-3.77-.14-5.66Z" />
  //     <path d="M62.44,25.92c-2.78.12-2.78-2-2.78-3.08V16.6a3.63,3.63,0,0,0-.85-2.27c1.07-.52,2.14-1.05,3.2-1.59v8.39a2.44,2.44,0,0,0,2.76,2.42A6.32,6.32,0,0,0,67,22.93l.13-.06V16.36a3.62,3.62,0,0,0-.84-2.25l3.45-1.75v9.25a3.52,3.52,0,0,0,.84,2.21c-.47.23-1.61.77-3.39,1.6h0V23c-.11.11-.23.22-.34.34-.58.58-2.63,2.5-4.39,2.6Z" />
  //     <path d="M72.52,25a5.49,5.49,0,0,0,.79-2.94V9.26A3.57,3.57,0,0,0,72.45,7l3.41-1.78V21.92a5.76,5.76,0,0,0,.91,2.82Z" />
  //     <path d="M82.26,24.71A3,3,0,0,1,79.9,24,3.1,3.1,0,0,1,79,21.76c0-1.15.3-8.57.31-8.64v-.21l-1,.07,3.57-3.92v2.77l3-.22-.33.91-2.62.2v8.93c0,1.09,1,1.62,2.83,1.49a9.11,9.11,0,0,0,1.66-.29A5.58,5.58,0,0,1,82.26,24.71Z" />
  //     <path d="M100.13,23.17c-3.51.3-7.69-.94-7.69-8.53s4.18-9.59,7.69-9.89a6.75,6.75,0,0,1,5.33,1.52L103,9.54C101.79,7.68,99.88,7,96.64,7.28h0a1.75,1.75,0,0,0-1.16.55,4,4,0,0,0-.71,2.79,17.91,17.91,0,0,0,.72,4.57c.86,3.08,2.46,6.55,7.16,6.15l.42-.05c0-.07.05-.14.07-.2V17.57a6,6,0,0,0-.86-2.81l4.36-.38a6.13,6.13,0,0,0-.86,3v3.14A8.15,8.15,0,0,1,100.13,23.17Z" />
  //     <path d="M114.4,22.05c-3.86.33-6-1.85-6-6.14,0-5.5,3.26-6.94,6-7.17,4.42-.38,6,3,6,6.28C120.4,20.7,116.64,21.85,114.4,22.05Zm-2.35-11.61c-.86.07-1.29.61-1.29,1.6A14.21,14.21,0,0,0,112,18.28c.82,1.74,2.37,2.53,4.59,2.34h0a1.2,1.2,0,0,0,1-.55,2.3,2.3,0,0,0,.32-1.29v-.29c0-2.15,0-4.17-1-6-.82-1.55-2.39-2.21-4.8-2Z" />
  //     <path d="M127.6,20.93c-3.39.26-5.26-2-5.26-6.42,0-2.4.69-6.49,5.29-6.84a4.23,4.23,0,0,1,3.85,1.4l-5.79,7.58v.07a1.07,1.07,0,0,0,.13.5,3.17,3.17,0,0,0,3.71,2.07,12.77,12.77,0,0,0,1.93-.33A5.34,5.34,0,0,1,127.6,20.93ZM125.54,9.27c-1,.08-1.22.9-1.26,1.78h0a14.4,14.4,0,0,0,1.07,4.64l0,.11v.66l.36-.63,2.32-3.66c.55-.88.68-1.55.42-2s-1.22-.89-2.82-.87Z" />
  //     <path d="M141.17,19.67a10.74,10.74,0,0,0,.86-2.91V11.12c0-.1,0-2.31-3-2.12a5.84,5.84,0,0,0-2.18.66l-.12.06v.13c0,1.21,0,2.43,0,3.64s0,2.4,0,3.57a6,6,0,0,0,.83,2.83l-4.26.28a5.4,5.4,0,0,0,.79-2.94V4.41a3.48,3.48,0,0,0-.85-2.21L136.65.4V9.59l.34-.35c.64-.66,2.87-2.55,4.62-2.65,2.78-.16,2.78,1.92,2.78,3v.23c0,1.06,0,4.81,0,6.27v.59a6.43,6.43,0,0,0,.83,2.73Z" />
  //     <path d="M147.16,19.32a5.53,5.53,0,0,0,.79-2.84V10.13a3.84,3.84,0,0,0-.84-2.23l3.45-1.72V8.77l.35-.44c.57-.69,2.09-2.31,4-2.37a2.44,2.44,0,0,1,2,.69l-2.28,2.91a2.53,2.53,0,0,0-2.26-1.14,4.32,4.32,0,0,0-1.69.47l-.12.06q0,3.68,0,7.35a6.21,6.21,0,0,0,.84,2.84Z" />
  //     <path d="M158.31,19a5.48,5.48,0,0,0,.79-2.83V10a3.6,3.6,0,0,0-.83-2.25l3.44-1.64,0,9.94a6.26,6.26,0,0,0,.83,2.87C161.15,18.89,159.73,18.91,158.31,19ZM160.2,4.38a6.23,6.23,0,0,1-2.12-2.26L160.24,0a6.32,6.32,0,0,0,2.06,2.09Z" />
  //     <path d="M172.44,18.85a9.75,9.75,0,0,0,.87-2.88V10.28s0-2.24-3.05-2.27a5.62,5.62,0,0,0-2.24.52l-.12.05q0,3.67,0,7.34a6.42,6.42,0,0,0,.84,2.89h-4.26a5.38,5.38,0,0,0,.79-2.81V9.71a3.68,3.68,0,0,0-.85-2.27c.58-.29,2.18-1,3.41-1.58v2.6l.33-.3c.74-.67,3-2.39,4.62-2.36,1.83,0,2.84,1.19,2.84,3.24,0,1.18,0,2.36,0,3.54s0,2.35,0,3.53a6.91,6.91,0,0,0,.84,2.83C175.17,18.9,173.81,18.87,172.44,18.85Z" />
  //     <path d="M183.52,24.3c-2.22-.12-3.69-.7-4.61-1.85L181.53,20a5.63,5.63,0,0,0,4.3,2.22,3.35,3.35,0,0,0,2.46-.61.75.75,0,0,0,.23-.82c-.34-.94-2.53-1.77-6.36-2.3-2.54-.35-4-1-4-1.83s1.6-1.79,2.73-2.07l.5-.13-.47-.24a4.5,4.5,0,0,1-2.41-4.06c0-2.15,2.46-4,5.16-3.88a5.37,5.37,0,0,1,3,1l.19.15.1-.2a3.51,3.51,0,0,1,3.27-2V7.85a3.87,3.87,0,0,0-1.48-.41,4,4,0,0,0-1.37.15l-.31.09.23.24a4.47,4.47,0,0,1,1.31,3.13c-.05,3.42-2.84,3.95-5.16,3.83a5.67,5.67,0,0,1-1.83-.35l-.15-.06a.57.57,0,0,0-.08.13,1.42,1.42,0,0,0-.3.83c0,1,1.4,1.5,4.29,1.67l1,.06c1.63.1,3,.26,3.55,1a2,2,0,0,1,.1,1.71C189.44,21.93,186.18,24.43,183.52,24.3ZM182.25,7.51c-1,0-1.52.39-1.52,1.33a6.58,6.58,0,0,0,.4,2,3.88,3.88,0,0,0,4,3,1.18,1.18,0,0,0,.92-.23,1,1,0,0,0,.26-.75,7.27,7.27,0,0,0-.41-1.94C185.22,8.55,184.19,7.6,182.25,7.51Z" />
  //     <path d="M196.69,20.59c-3.4-.34-5.27-2.91-5.27-7.32,0-2.39.69-6.39,5.29-5.93a5.2,5.2,0,0,1,3.85,2.11q-2.9,3.23-5.79,6.53V16a1.31,1.31,0,0,0,.14.53,3.89,3.89,0,0,0,3.7,2.74,12.57,12.57,0,0,0,1.94,0A4.48,4.48,0,0,1,196.69,20.59Zm-2.07-12c-1-.1-1.22.69-1.26,1.56h0A16,16,0,0,0,194.43,15l0,.12v.65l.36-.56,2.32-3.26a1.88,1.88,0,0,0,.42-2c-.32-.68-1.21-1.12-2.81-1.37Z" />
  //     <path d="M202.41,20.89a4.87,4.87,0,0,0,.79-2.7V11.84a4.49,4.49,0,0,0-.84-2.38c1.15-.38,2.3-.74,3.45-1.1V11l.35-.37a4.75,4.75,0,0,1,4-1.61,3.07,3.07,0,0,1,2,1.09c-.76.82-1.52,1.63-2.28,2.46a3.22,3.22,0,0,0-2.26-1.58,3.85,3.85,0,0,0-1.69.15l-.12,0c0,2.45,0,4.9,0,7.35a7.09,7.09,0,0,0,.84,3C205.25,21.27,203.83,21.07,202.41,20.89Z" />
  //   </g>
  // </svg>
);

export default Name;