import * as React from 'react'
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgPeep25({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 240 324"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="none" fillRule="evenodd">
        <path
          d="M188.18 197.386c-.664-1.823.305-3.642.843-5.405 1.91-6.117 3.996-12.234 6.946-17.938 1.118-1.908-.72-4.25-2.852-3.711-3.647.51-7.408.104-11.062-.122-1.336-3.458-4.903-4.893-7.71-6.884-3.185-1.99-6.283-4.274-9.596-6.017-.184-1.648-2.181-2.056-3.402-.877-3.354-2.088-7.376-1.7-10.971-3.067-2.732-4.418-2.937-9.063-3.66-13.324-.316-1.858.02-3.65-1.25-5.306-4.262-5.997-21.103-8.598-27.313-5.044-3.342-2.085-3.423 1.692-3.953 4.023-.59 1.166-.91 2.487-.811 3.878-3.59 7.502-11.804 10.894-19.16 13.64-.923-.887-2.242-.775-3.12-.04-6.376 1.387-12.564 3.824-17.907 7.63-6.069 1.776-10.343 6.714-13.434 12.009-.34.558-.421 1.127-.321 1.65-9.505 13.938-14.042 30.624-14.679 47.476-6.112 3.67 2.905 36.636 5.005 43.48l.006-.003c1.362 2.412 2.908 9.295 6.316 8.762 2.338 2.645 6.064 2.125 9.236 2.328-.516 1.983-.262 4.252.353 6.211.727 2.333 4.297 2.412 4.803-.131 31.594 6.14 64.01 1.24 95.96 2.162 9.237.066 18.473.352 27.689 1.01 1.297.093 2.613-1.234 2.524-2.526-1.98-21.087-3.841-48.827-6.057-69.707-.525-4.762-.941-9.576-2.423-14.157z"
          fill="#FFF"
        />
        <path
          d="M114.72 130.993c.091-.248.46-.215.467.063.146 5.929-1.33 13.174-6.072 17.18-2.434 2.055-5.653 2.996-8.609 4.077l-.333.123-5.222 1.946c-1.385.516-2.88 1.31-4.103.581.99 2.456 1.821 4.98 3.027 7.346 1.5 2.947 3.315 5.643 5.536 8.094 8.799 9.714 22.723 12.677 35.219 9.83 6.435-1.465 12.696-4.243 17.086-9.309 3.336-3.85 5.253-9.019 5.705-14.117-.132.021-.27.02-.413-.01-1.58-.346-3.177-1.194-4.568-2.025l-.134-.08c-1.339-.806-2.734-1.73-3.695-2.983-.636-.829-1.288-2.596-1.955-5.3-.273-1.526-.529-4.563-.485-6.105.004-.145.65-.231.718-.08.596 1.309.789 4.184 1.249 5.546l.093.272c.49 1.422.912 3.153 1.93 4.303 1.913 2.159 4.798 3.073 7.373 4.156.185-2.44 4.08-2.384 4.031.161-.003.138-.009.276-.014.413.308.17.603.362.88.549l.269.183c1.02.694 2.048 1.354 3.134 1.942 2.103 1.14 4.329 2.045 6.483 3.08a33.024 33.024 0 016.122 3.788 31.487 31.487 0 012.564 2.241l.22.218c.774.77 1.781 1.633 2.222 2.646.097.223.584.743.848.76 4.094.269 8.179.648 12.246 1.216 1.054.147 1.47.69 1.08 1.569-1.337 3.017-6.574 15.069-7.967 18.303.163 2.376-.057 5.173.09 7.55.214 3.468.495 6.935.831 10.394 1.205 12.371 3.03 24.683 4.68 37 .825 6.165 1.578 12.34 2.321 18.514a226.37 226.37 0 011.215 13.298l.07 1.16c.097 1.459.321 2.853-.582 4.105-.409.568-1.344.888-1.882.243-.676-.812-.928-1.418-.992-2.484-.05-.816-.061-1.635-.099-2.452-.08-1.77-.18-3.54-.3-5.308-.235-3.535-.505-7.07-.817-10.598-1.093-12.376-3.172-24.658-4.555-37.002a269.29 269.29 0 01-1.455-18.717c-.13-3.125-.178-6.25-.148-9.377.012-1.169.067-2.332.147-3.492a342.6 342.6 0 01-6.528 13.975l-.54 1.09c-1.443 2.908-2.925 5.827-4.66 8.57l-.297.467c-.703 1.114-1.663 2.87-2.945 3.221-.892.245-1.983.073-2.898.055-.909-.017-1.818-.02-2.726-.058a13.307 13.307 0 01-2.973-.44 3.369 3.369 0 01-.459-.152c-.991 1.622-2.675 2.858-4.398 3.578-1.379.577-2.825.972-4.273 1.338l-.51.129c-1.553.387-3.329.57-4.204 2.07l-.204.348c-.65 1.106-1.275 2.078-2.353 2.87-1.16.855-2.533 1.392-3.902 1.81-1.401.428-2.835.755-4.258 1.106l-.388.097c-.939.235-1.887.45-2.82.707-.399.109-.804.221-1.195.356-.458.157-.79.402-1.151.67-.325 1.134-1.712 1.75-2.852 1.67-.6-.041-1.136-.244-1.625-.542-.854.726-1.793 1.377-2.663 2.05a389.947 389.947 0 01-11.341 8.453 296.625 296.625 0 01-14.022 9.43 372.81 372.81 0 01-6.001 3.74l.215.08.427.16c1.01.378 2.135.987 2.33 2.165.156.935-.366 1.579-1.288 1.693-1.097.136-1.95-.64-2.632-1.379-.302-.326-.639-.63-.927-.965a2.087 2.087 0 01-.288-.46 128.179 128.179 0 01-6.048 3.368l-.512.264c-5.07 2.593-10.005 5.435-15.117 7.954-1.334.658-2.96 1.369-4.655 1.854.45 1.744.442 3.659.454 5.429.01 1.725-2.73 1.717-2.672 0l.028-.83c.05-1.393.131-2.84.462-4.197-4.994.828-9.983-.972-10.912-1.513-1.025-.596-1.956-1.55-2.73-2.436-1.658-1.895-2.808-4.167-3.828-6.452-2.186-4.894-3.735-10.126-4.867-15.357-4.174-19.29-2.378-39.935 4.4-58.425a111.164 111.164 0 015.984-13.492l.285-.539c2.286-4.306 4.827-8.595 8.055-12.26 3.362-3.817 7.51-6.785 12.025-9.09a64.317 64.317 0 016.789-2.962c.372-.139.747-.263 1.123-.382 2.415-1.54 5.346-3.014 8.278-2.956.2.004.36.08.481.194.142.024.283.054.425.095.312.091.642.434.597.786l-.015.117a.96.96 0 01-.037.166c.105.016.208.04.309.075 2.805-.792 5.566-2.005 8.303-2.982l.624-.22c2.292-.804 4.645-1.592 6.526-3.183 1.87-1.583 3.278-3.632 4.295-5.848 1.253-2.73 1.814-5.688 2.844-8.491zm56.168 143.997c.555-.413 1.212.066 1.42.578.683 1.68.345 4.289-.617 5.773-.996 1.539-3.382.931-3.44-.932-.06-1.943 1.069-4.251 2.637-5.419zm5.738-46.368c.05-.218.388-.216.44 0 .462 1.97.45 4.093.587 6.113l.015.224c.163 2.228.3 4.462.398 6.693a889.584 889.584 0 001.086 19.696c.456-.255.926-.478 1.413-.675.729-.295 1.44-.329 2.223-.32.954.01 1.673.849 1.546 1.784-.138 1.019-1.034 1.455-1.965 1.31-1.03-.162-2.066-.412-3.107-.515.116 1.681.236 3.362.363 5.042.168 2.225.387 4.446.542 6.672.014.212.03.425.047.638.62-.323 1.28-.488 2.027-.692l.194-.054c1.084-.312 2.245-.743 3.249-.013.675.49.81 1.298.25 1.944-.847.982-2.101.792-3.272.742l-.63-.023c-.594-.024-1.141-.062-1.69-.212.1 1.45.154 2.905-.024 4.334-.096.772-1.112.975-1.38.187-.703-2.059-.848-4.279-1.106-6.435-.24-2.013-.386-4.041-.543-6.064l-.047-.607c-.354-4.45-.637-8.901-.844-13.36a379.23 379.23 0 01-.38-13.379c-.023-2.026.01-4.06.09-6.085l.025-.608c.092-2.084.028-4.295.493-6.337zM83.79 275.32c.027-.285.255-.639.594-.595.312.04.634.021.943.073.408.068.737.309 1.116.46.617.247 1.289.375 1.922.576 1.187.38 1.834 1.63 1.342 2.797-.517 1.227-1.816 1.506-2.938.99-.885-.405-1.545-1.054-2.14-1.805l-.168-.214c-.257-.323-.547-.682-.655-1.073-.105-.381-.053-.822-.016-1.21zm57.675-5.77c1.479-.209 2.742.297 4.11.774l.111.038c1.393.481 3.424.814 4.138 2.24.43.86.096 2.001-.917 2.256-1.605.402-3.044-.771-4.37-1.56l-.07-.042c-1.281-.75-2.603-1.381-3.42-2.676-.219-.345-.03-.967.418-1.03zM89.848 151.913c-.592.132-1.184.25-1.776.362-2.251 1.208-4.436 2.46-6.76 3.535-2.466 1.141-4.923 2.32-7.265 3.7-4.732 2.789-8.634 6.415-11.857 10.86-5.568 7.677-9.71 16.53-12.674 25.514a107.288 107.288 0 00-2.047 6.995c1.067-.986 2.329-1.592 3.744-2.112.6-.22 1.346.153 1.65.672.137.234.214.464.2.738-.032.604-.424 1.29-1.073 1.41-1.512.279-2.982.821-4.44 1.3a.68.68 0 01-.563-.041 104.571 104.571 0 00-2.673 18.69 99.663 99.663 0 00.486 16.027c.453-.204.897-.395 1.394-.51.645-.15 1.28-.334 1.909-.54 1.816-.596 2.644 2.403.788 2.86-.69.17-1.385.311-2.09.415-.612.09-1.155.05-1.733-.044a100.463 100.463 0 001.813 9.869l.17.71c.998 4.152 2.162 8.343 3.845 12.266.825 1.924 1.918 3.752 3.267 5.357.663.789 1.4 1.465 2.202 2.106.668.533 2.938 1.69 5.628 1.69s3.417-.254 4.774-.721c2.683-.924 5.231-2.4 7.748-3.713l.26-.135c1.112-.576 2.221-1.16 3.327-1.75-.14-1.128.104-2.075.692-3.116.635-1.127 2.208-.566 2.325.587l.003.044c.018.26.062.524.116.788 7.392-4.05 14.628-8.386 21.749-12.903a423.902 423.902 0 0013.596-8.99 308.492 308.492 0 0010.078-7.248c.474-.355.94-.727 1.415-1.084a24.276 24.276 0 01-.338-.432c-1.775-2.325-2.926-5.096-3.5-7.955-.347-1.725-.514-3.516-.565-5.275l-.022-.765c-.035-1.288-.044-2.637.193-3.885-.323.178-.653.352-.982.538-1.18.669-2.362 1.336-3.545 2a284.806 284.806 0 01-7.153 3.906c-4.299 2.253-8.64 4.396-13.098 6.317l-2.17.936c-3.765 1.62-7.56 3.21-11.475 4.415a97.19 97.19 0 01-6.672 1.777l.905 1.062c.615.72.625 1.752-.16 2.358-.771.596-1.806.347-2.32-.443l-.937-1.442a2.592 2.592 0 01-.379-.901c-1.031.216-2.066.423-3.103.624l-1.96.374c-2.8.54-5.515 1.611-8.017 2.98-.87.477-1.113-.448-.191-1.093 2.695-1.885 5.84-2.951 9.083-3.846l.16-.044c1.19-.326 2.377-.666 3.563-1.018a5.021 5.021 0 01-.19-1.501c.032-1.203.139-2.41.203-3.61.134-2.523.304-5.036.505-7.554.077-.97.163-1.942.261-2.913-.635-.341-1.183-.794-1.892-1.016l-.12-.035c-.758-.205-.502-1.182.171-1.265a5.432 5.432 0 011.818.088c.094.02.182.043.266.068.11-.9.233-1.797.372-2.69.368-2.358.629-4.843 1.395-7.108.057-.168.306-.228.398-.052 1.116 2.122 1.154 4.725 1.28 7.088l.016.282c.148 2.578.156 5.181.108 7.763-.049 2.66-.14 5.314-.26 7.972-.047 1.07-.045 2.181-.227 3.205 6.635-2.158 13.153-4.741 19.401-7.8 4.407-2.157 8.777-4.4 13.096-6.729 2.164-1.166 4.339-2.313 6.5-3.484.758-.41 1.515-.822 2.271-1.234l1.135-.619c1.062-.58 1.948-1.157 3.185-1.197.369-.012.7.16.934.422.665-.472 1.433-.761 2.239-.754a153.008 153.008 0 013.727-4.967l.946-1.205c1.638-2.078 3.374-4.188 5.463-5.77.932-.705 1.957-1.235 3.027-1.672a1.606 1.606 0 01-.718-.39c-1.021-.947-1.162-2.707-1.37-4.029-.215-1.37-.131-2.598.081-3.964.083-.532.962-.642 1.177-.154.452 1.028.931 2.014 1.343 3.054l.121.314c.442 1.17 1.383 2.402 1.32 3.673a1.626 1.626 0 01-.313.895c.898-.298 1.808-.564 2.705-.842 2.822-.872 5.655-1.72 8.53-2.396.766-.18 1.536-.347 2.308-.5.405-1.923.995-3.81 1.69-5.663-.658-.338-1.084-.903-1.651-1.407-.531-.471-.896-1.045-1.348-1.586-.413-.492-.181-1.382.56-1.353l.21.01c.767.035 1.51.114 2.206.472l.248.128c.34.177.712.38 1.043.618.434-.997.884-1.985 1.34-2.963l.59-1.264c1.533-3.291 3.06-6.708 4.984-9.772.856-1.363 1.994-2.213 3.627-2.345 1.682-.136 3.431.04 5.116.1 1.952.07 3.904.152 5.855.255-.5-.524-.956-1.107-1.458-1.61a30.196 30.196 0 00-2.64-2.355c-1.833-1.446-3.847-2.637-5.94-3.663-2.093-1.026-4.248-1.92-6.212-3.189-1.244-.802-2.355-1.811-3.369-2.903-.638 6.888-3.963 13.287-8.958 18.095-5.188 4.993-12.357 7.736-19.37 8.903-7.153 1.19-14.62.753-21.463-1.734a37.743 37.743 0 01-9.93-5.413c-.033.2-.073.397-.151.583-.106.25-.234.462-.382.681l-.263.385a9.107 9.107 0 01-.523.706c-.456.544-1.103.782-1.799.78-1.333-.005-2.342-1.313-1.983-2.606.225-.812.707-1.301 1.46-1.62.238-.1.48-.184.725-.267l.183-.062c.246-.085.491-.165.745-.212a33.263 33.263 0 01-3.942-4.114c-3.725-4.644-7.398-11.147-6.153-17.314.022-.106.117-.173.22-.19.072-.433.302-.851.618-1.133a5.442 5.442 0 00-.642-.128zm38.67 106.625c.738-.41 1.5.564.9 1.167l-.894.895c-.83.835-1.64 1.679-2.35 2.63l-.172.233c-.96 1.306-1.983 2.82-3.555 3.307-1.902.59-3.73-1.727-2.629-3.42.963-1.48 2.815-2.037 4.412-2.649 1.511-.579 2.876-1.378 4.289-2.163zm-61.352-6.827c.434-.568 1.563-.27 1.268.534-.962 2.608-1.354 6.163-3.782 7.896-.784.558-2.014.302-2.66-.343-.732-.734-.761-1.766-.342-2.66.51-1.092 1.768-1.883 2.65-2.714l.079-.075c.948-.922 1.973-1.572 2.787-2.638zm101.49 3c.774-.333 2.79-.981 3.387-.214a.44.44 0 01.071.093c.147.255.168.614 0 .867-.696 1.046-1.421 1.827-2.41 2.572l-.112.083c-1.077.792-2.09 1.723-3.402 2.08-1.82.496-3.09-1.783-1.813-3.114 1.03-1.072 2.601-1.63 3.966-2.227l.314-.14zm-73.074-14.9c-.304-.55.318-1.225.881-.88 1.607.982 3.479 1.719 5.283 2.248.73.215 1.39.955 1.335 1.754l-.008.121c-.022.283-.06.563-.24.798-.629.822-1.528 1.139-2.488.652-2.14-1.085-3.605-2.599-4.763-4.692zm46.96-1.666c-.039-.231.13-.41.366-.365 1.358.257 2.612.913 3.778 1.667.625.405 1.228.849 1.852 1.258.77.504 1.06.92 1.173 1.846.075.61-.495 1.169-1.018 1.338-1.425.46-3.058-1.05-4.023-2.03l-.044-.044c-1.01-1.03-1.844-2.249-2.083-3.67zm40.782-1.601c-.31-.836.757-1.53 1.455-1.119.656.387 1.369.708 1.989 1.15.569.408 1.088.89 1.634 1.332l.27.213c1.001.806 2.654 2.798 1.223 3.953-1.363 1.1-3.17-.305-4.085-1.332l-.063-.072c-.527-.608-1.176-1.269-1.557-1.98-.36-.668-.603-1.435-.866-2.145zm-13.44-64.725c-1.706.331-2.402 2.439-3.12 3.812-1.697 3.243-3.257 6.544-4.823 9.85-.483 1.017-.952 2.041-1.426 3.064-.03.08-.066.159-.11.237-.97 2.09-1.97 4.168-3.14 6.153 1.07-.2 2.145-.371 3.224-.506-.054-1.016.641-2.376.985-3.232l.029-.072c.43-1.096.879-2.824 1.983-3.393.368-.189.762.048.79.454.084 1.207-1.096 2.588-1.673 3.612a75.9 75.9 0 00-1.02 1.871c-.124.236-.228.467-.355.675.556-.06 1.114-.114 1.672-.153l.364-.025c2.071-.137 4.27-.176 6.142.846 1.735.947 2.623 2.97 1.67 4.812-1.189 2.295-3.805 2.599-6.106 2.785-2.874.232-5.754.65-8.607 1.059-2.952.422-5.731 1.51-8.638 2.07-.27.052-.44-.302-.191-.453 2.293-1.397 5.081-2.165 7.645-2.948l.208-.063c1.39-.428 2.75-.916 4.189-1.158a66.124 66.124 0 014.21-.571l.137-.013c1.551-.13 5.508-.086 5.341-2.383-.11-1.52-2.581-1.783-3.71-1.801-5.17-.083-10.377 1.29-15.291 2.761l-1.097.33c-2.012.605-4.027 1.228-6.002 1.938-2.237.804-4 2.059-5.63 3.775-1.806 1.904-3.556 3.85-5.43 5.69a210.743 210.743 0 01-3.585 3.428c-.273.353-.49.737-.642 1.235-.255.842-.196 1.624-.1 2.489.243 2.183.297 4.388.601 6.565.282 2.016.677 4.106 1.514 5.976.331.74.763 1.468 1.254 2.119l.396.515c.173.224.366.47.57.7.297-.364.728-.6 1.229-.541 1.064.125 1.901.095 2.946-.15.808-.189 1.61-.41 2.415-.616 1.58-.403 3.174-.77 4.738-1.233l.27-.081c1.165-.358 2.33-.806 3.3-1.558 1.128-.875 1.475-2.137 2.31-3.228 1.782-2.33 5.635-2.282 8.243-2.92 2.217-.542 4.35-1.398 5.884-3.007l.09-.096c-.069-.287.042-.61.308-.76l.058-.032a.635.635 0 01.326-.08c.142-.21.28-.425.405-.655.102-.19.359-.05.325.137-.02.112-.048.22-.074.33 1.486-.382 3.118-.31 4.627-.308l1.957-.007c.34-.004.844-.021.89-.042l.045-.02c.122-.053-.051.035.034-.079.094-.125.186-.251.277-.378.325-.455.632-.923.933-1.395-3.28.836-6.675 1.356-10.023 1.79-3.592.465-7.23.788-10.854.791-1 .001-.99-1.507 0-1.545 3.837-.147 7.654-.35 11.465-.842a98.293 98.293 0 005.885-.948 97.74 97.74 0 002.255-.458l.562-.123c.353-.078 1.35-.19 1.835-.516l.286-.492c-.047-.576-1.51-.499-1.853-.5-.973-.002-1.946.006-2.92.009-1.946.005-3.891-.012-5.837-.027-3.889-.032-7.792-.168-11.677-.001-.943.04-1.438-1.473-.506-1.871 4.115-1.758 8.683-2.14 13.077-2.68 2.31-.284 4.623-.612 6.881-1.187l.559-.142c1.419-.364 2.986-.808 4.18-1.675-1.795-.727-4.028-.643-5.89-.746l-.142-.009c-2.607-.16-5.218-.242-7.83-.246-5.344-.007-10.689.182-16.027.436-.134.006-.162-.206-.031-.234 5.486-1.197 11.062-1.774 16.677-1.863 2.614-.042 5.23-.005 7.843.111l.959.044c2.227.096 4.7.122 6.563 1.468.284.205.434.467.457.744 2.5-4.984 4.808-10.073 7.126-15.127 1.802-3.93 3.537-7.894 5.404-11.794l.605-1.261c.81-1.683 1.639-3.367 2.56-4.99-3.444-.46-6.907-.78-10.372-1.024-3.158-.224-13.46-.718-14.98-.423zm-1.524 54.02c.393-.219.994-.04 1.091.444.072.36.195.761.195 1.13 0 .442-.158.923-.242 1.355-.194.995-.433 1.803-.938 2.689-.316.554-.955.93-1.597.916-.508-.012-.959-.148-1.307-.542-.418-.471-.705-1.165-.476-1.8.6-1.663 1.704-3.32 3.274-4.192zm-83.302-1.66c.919-1.61 3.097-3.05 4.998-2.907 2.855.214 3.437 4.06.673 4.977-1.652.548-3.924-.015-5.37-.918a.859.859 0 01-.301-1.152zm-29.337-5.501c-.208-.304.137-.65.448-.582.69.151 1.433.218 2.109.423.692.211 1.361.56 2.047.8 1.435.503 2.969.756 4.358 1.363.556.243.993 1.048.941 1.641l-.013.139c-.03.294-.081.551-.246.82-.442.723-1.318 1.096-2.145.874-1.534-.413-3.033-1.472-4.341-2.351l-.242-.161c-.571-.377-1.186-.77-1.646-1.255-.48-.507-.876-1.138-1.27-1.711zm52.732-5.856c-.176-.637.615-1.057 1.076-.627.921.859 1.885 1.655 2.788 2.536l.06.06c.646.65 1.587 1.902.746 2.742-1.077 1.078-2.577-.52-3.154-1.354-.733-1.057-1.173-2.122-1.516-3.357zm70.522-5.26c-1.367 1.448-3.473 2.114-5.328 2.666-2.199.654-4.464 1.044-6.732 1.366-2.192.31-4.366.587-6.523.944 1.632.02 3.263.032 4.89.061 1.878.034 3.754.075 5.63.13 1.367.039 2.97-.148 4.269.36.234.09.453.218.644.372a162.47 162.47 0 003.15-5.9zM94.65 194.016c1.427-.454 2.768-1.056 4.281-.9.402.042.69.433.47.82-.716 1.262-1.882 1.975-3.03 2.819l-.1.075a37.102 37.102 0 01-3.971 2.553c-2.352 1.32-4.459-2.458-2.084-3.567 1.429-.667 2.93-1.322 4.434-1.8zm25.69-3.28c2.183.143 4.365.24 6.55.329 2.532.102 1.681 4-.434 3.211a267.65 267.65 0 00-6.287-2.276c-.642-.221-.59-1.276.13-1.266l.04.001zM64.348 183.8c.566-.04 1.137.084 1.703.14l.603.058c1.243.123 2.408.276 3.594.782 2.187.934 1.012 4.45-1.183 4.37-1.623-.06-3.01-.757-4.381-1.568-1.198-.71-1.932-1.598-2.741-2.712-.268-.369.105-.782.47-.82.643-.065 1.292-.205 1.935-.25zm109.63-7.182a14.312 14.312 0 01-2.613 6.22c-.68.926-1.875.961-2.549 0-.953-1.36-.365-2.919.353-4.225l.213-.382c.321-.574.815-1.41 1.38-1.988l.01-.06c.302-2.365 3.58-1.892 3.207.435zM85.684 162.12c.544-.49 1.546-.343 1.723.455.247 1.117.397 2.377.236 3.511-.088.615-.121 1.305-.363 1.878-.26.616-.76 1.09-1.23 1.554-.94.924-2.922.619-3.174-.839l-.032-.178c-.127-.69-.289-1.427-.101-2.11.141-.516.458-1.042.72-1.52l.055-.102c.524-.977 1.341-1.907 2.166-2.65zm76.498 2.377l.197.003c1.519.03 4.296.4 4.31 2.277.004.443-.323.902-.763 1.003-.908.21-1.494-.326-2.142-.868a6.585 6.585 0 00-1.787-1.052c-.692-.276-.646-1.364.185-1.363z"
          fill={props.color}
        />
        <path
          d="M119.872 55.516c32.022-1.576 46.472 20.98 47.407 31.054.649 6.993-3.481 15.053-3.481 21.302 0 3.19 3.903 10.037 2.086 14.686-4.045 10.348-12.61 21.831-23.524 21.831-10.914 0-25.118 3.02-37.178-14.254-1.131-1.62-15.444-10.833-16.834-19.586-3.463-21.804 8.675-53.91 31.524-55.033z"
          fill="#FFF"
        />
        <path
          d="M118.363 41.479c1.145-1.31 3.078-1.835 4.795-1.733 2.495.148 4.665 1.689 7.148 1.803 2.602.12 5.114-.782 7.724-.364 1.599.258 3.183 1 4.208 2.251 3.55-1.016 7.403.33 9.663 3.27 2.79-.434 5.823 1.414 6.676 4.102 3.543.114 6.888 2.961 7.283 6.529 1.416.374 2.645 1.35 3.4 2.642.876 1.496 1.022 3.212.863 4.899 1.667.851 2.514 2.682 2.736 4.618 1.523 1.137 2.185 3.18 1.874 5.11 1.166.657 1.769 2.188 1.762 3.553-.006 1.274-.344 2.403.131 3.633.424 1.095.576 2.008.343 3.156l-.024.111a12.79 12.79 0 00-.107.544c.316.277.582.624.783 1.027.73 1.476.621 3.158.064 4.654.244.953.213 1.96-.147 2.875a5.204 5.204 0 01.926 3.406 5.547 5.547 0 01-1.71 3.546c.256 1.894-.514 3.94-1.906 5.275a5.012 5.012 0 01-.593 3.397 4.68 4.68 0 01-1.724 1.734 5.57 5.57 0 01-.273 1.928 6.172 6.172 0 01-1.438 2.396c.388 2.485-1.099 5.242-3.717 5.94-.22.058-.43.085-.63.09a27.157 27.157 0 01-1.708 6.985c-2.235 5.7-6.3 10.683-11.6 13.792a23.927 23.927 0 01-8.573 3.029c-2.164.317-4.245.239-6.416.023-2.726-.273-5.464-.68-8.113-1.382l-.426-.113c-1.099-.295-2.257-.634-3.208-1.227-1.065-.664-1.618-1.687-1.863-2.891-.137-.67.287-1.392 1.021-1.406h.047c.161.004.32-.003.481-.013l.122-.008h.006c.008-.002.013-.002.021-.002.072-.01.142-.032.211-.042.808-.136 1.514-.002 2.271.25l.096.033c1.276.44 2.541.847 3.86 1.15a49.65 49.65 0 004.125.752l.138.017.042.006.021.002c.004 0 .009 0 .013.002l.408.051c.32.038.642.072.963.106.591.059 1.183.106 1.775.14 10.21.574 18.786-7.468 21.374-17.11.938-3.489.999-6.97.722-10.453a2.486 2.486 0 01-.14-.843c0-.16.01-.32.02-.48-.345-3.369-.942-6.74-1.317-10.121-.437-3.95-.68-7.924-.591-11.9.044-1.963.253-3.907.528-5.852l.1-.698a6.806 6.806 0 01-3.315-1.684c-1.994 1.152-4.574 1.254-6.542.038-2.206 1.384-5.288 1.51-7.509.156-1.342.959-3.033 1.373-4.694 1.009a5.447 5.447 0 01-2.125-1.008c-.454.08-.914.111-1.371.087l-.095.053c-1.054.556-2.222.922-3.424.881a8.094 8.094 0 01-2.655-.538c-.907.547-1.899.921-2.96 1.055-1.55.196-3.223-.147-4.512-1.027-2.356 1.342-5.254 1.55-7.797.647a7.174 7.174 0 01-2.085 2.23c.151.541.2 1.119.147 1.674-.085.914-.314 1.733-.688 2.47.394.82.513 1.83.292 2.843-.315 1.444-1.155 2.7-2.242 3.68a6.91 6.91 0 01-3.416 5.666c-.105.06-.208.11-.311.155-.091.124-.2.233-.324.325-1.308 1.21-3.377 1.113-5.016.43l-.096.005c-.585.015-.984-.213-1.221-.55a5.508 5.508 0 00-.714.083 9.92 9.92 0 00-2.614.881c-2.045 1.053-2.991 2.913-3.274 5.149-.308 2.439.393 4.924 2.28 6.575.916.803 2.089 1.306 3.28 1.517 1.317.235 2.724-.342 3.695.789.195.224.328.536.222.839-.33.942-.872 1.304-1.722 1.435 1.228 1.456 2.487 2.864 3.881 4.172 1.509 1.418 3.068 2.792 4.429 4.356 1.438 1.655 2.738 3.409 3.64 5.417.515 1.154.93 2.344 1.375 3.525l.08.206c.497 1.255 1.159 2.465.393 3.776-.304.516-.993 1.014-1.626.932-1.785-.228-2.383-1.435-2.933-3.008-.414-1.187-.73-2.409-1.176-3.586a13.443 13.443 0 00-.27-.648c-1.03.287-2.161.059-3.08-.528a7.457 7.457 0 01-3.119.633c-1.406-.024-2.69-.415-3.795-1.12l-.264-.07c-1.68.643-3.648.528-5.17-.515a5.463 5.463 0 01-2.04-2.582c-1.274-.024-2.533-.476-3.445-1.38a5.16 5.16 0 01-1.472-3.01c-1.096-.217-2.123-.747-2.929-1.64-.672-.745-1.081-1.695-1.22-2.68-1.334-.381-2.537-1.253-3.194-2.468a4.683 4.683 0 01-.401-3.475l-.078-.112c-1.374-.72-2.423-1.897-2.53-3.58-.031-.48.02-.959.15-1.412a4.236 4.236 0 01.116-1.504c-1.848-1.799-2.518-4.688-1.515-7.076-1.806-1.945-2.283-5.02-.959-7.328-.908-1.099-1.375-2.5-1.297-3.997.097-1.868.953-3.5 1.978-5.01-.761-.842-1.167-2.015-1.137-3.148.042-1.642.915-3.056 2.007-4.227-.953-2.891.112-6.027 2.45-7.858-.473-.78-.648-1.745-.493-2.724.27-1.71 1.552-2.874 2.936-3.796-.29-.942-.213-1.96.247-2.933.615-1.3 1.775-2.124 2.985-2.822.313-2.883 3.533-5.345 6.233-3.857-.67-2.145 1.26-4.462 3.477-4.707 1.086-3.293 4.832-5.368 8.2-4.55 1.721-2.355 4.926-3.261 7.647-2.251 2.992-2.293 6.704-2.634 10.205-1.469zm-21.31 64.654c2.101-.114 3.677 1.602 4.785 3.173 1.039 1.473-1.627 3.028-2.405 1.405-.279-.579-.596-1.192-1.02-1.7-.072.1-.135.204-.197.31l-.063.107c-.047.078-.095.159-.135.241.004.015-.06.21-.062.218-.173.526-.551.864-1.066 1.046-.666.233-1.296-.268-1.509-.856-.34-.938.45-1.756 1.272-2.128-.807-.131-1.602.144-2.185.765-.08.087-.215.017-.22-.091-.067-1.473 1.473-2.418 2.804-2.49z"
          fill={props.color}
        />
        <path
          d="M153.707 116.647c.313-.408 1.073 1.37 1.228 1.587l.008.01c.677.82 1.23 2.074 1.308 3.126.002.032.002.062.002.093 1.085-.15 2.17-.301 3.255-.468.42-.315 1.007-.217 1.575.07 1.267.64.65 2.672-.715 2.64-3.69-.088-7.46.386-11.12.813-1.883.22-3.762.452-5.635.75-1.749.278-3.538.67-5.308.747-.097.004-.137-.14-.05-.185 1.56-.802 3.344-1.287 5.03-1.757a99.066 99.066 0 015.51-1.389c1.661-.361 3.33-.632 5.003-.875a1.296 1.296 0 01-.036-.102c-.212-.712-.207-1.529-.252-2.28l-.026-.397c-.041-.687-.083-1.983.223-2.383zm-5.436-8.78c1.595.97 4.026 3.231 2.31 5.636-2.02 2.121-4.93-.31-6.363-1.41-1.329-.852-2.822 1.34-1.589 2.335 10.357 7.67 14.56-6.308 6.449-7.702-.894-.154-1.225.84-.807 1.14zm-25.65-8.54c2.654-.404 5.373-.451 8.055-.317a85.47 85.47 0 016.351.554c.519.065 1.32.363 1.813.227 1.507-.412 2.937 1.014 2.522 2.523-.412 1.498-2.179 1.893-3.315.993-.539-.19-1.08-.37-1.626-.538a2.197 2.197 0 01-.189.506c-.096.184-.19.37-.278.557.02-.03-.127.32-.13.33l-.118.305c-.203.526-.43 1.025-.983 1.297-.76.375-1.951.168-2.258-.725-.48-.94-.162-2.253.112-3.226l.022-.075c-3.313-.788-6.681-1.38-9.979-2.181-.108-.026-.119-.211 0-.23zm39.399-3.534c.172-.346.563-.347.796-.023.517.72-.641 1.75-1.124 2.23l-.049.048c-1.086 1.102-2.41 1.991-3.724 2.794-.275.169-.555.33-.836.488.052.104.1.211.138.32a2.93 2.93 0 01.024 1.8c-.373 1.184-1.366 2.13-2.653 2.129-.68-.001-1.483-.643-1.391-1.392.032-.266.06-.55.1-.833-.906.301-2.018-.052-2.593-.799-.801-1.038-.581-2.739.645-3.384.902-.473 1.897-.593 2.874-.844.97-.248 1.932-.533 2.88-.851.936-.314 1.867-.65 2.797-.983.46-.165.915-.317 1.383-.456.21-.062.51-.226.733-.244z"
          fill={props.color}
        />
        <g fill={props.color}>
          <path d="M157 133.092c-.738-.241-1.462-.522-2.19-.793-3.72-1.87-8.214-2.208-12.115-.634-1.915.773-3.7 2.161-5.622 3.071-.456.17-.917.325-1.382.455-.285-.1-.57-.205-.853-.31-2.038-.77-3.955-1.717-5.817-2.76-.198-.28-.404-.551-.626-.812 1.347-.192 2.666-.51 3.859-.838 3.663-1.003 7.115-2.64 10.766-3.688 3.4-.978 7.088-1.513 10.502-.298 1.62.577 3.047 1.588 4.623 2.268.815.351 1.793.695 2.746.746-.615 1.473-1.392 2.85-2.455 3.995a14.45 14.45 0 01-1.436-.402zm7.927-11.538c-.327.271-1.673 1.146-2.11 1.668a16.585 16.585 0 01-.336-.132.936.936 0 00-.763-.333c-2.013-.937-3.806-2.26-5.405-3.92-1.137-1.178-2.3-2.41-3.82-3.092-1.79-.808-3.549-.436-5.43-.313-2 .133-3.975-.436-5.974-.163-1.462.2-2.83.82-4.014 1.693-2.415 1.782-4.08 4.284-6.12 6.442-2.316 2.447-5.164 4.011-8.33 4.81a2.23 2.23 0 00-.119-.074c-2.335-2.113-4.443-4.5-6.308-7.042-1.822-2.483-6.624-13.662-7.784-14.642-.481-.408-1.01-.584-1.514-.569-.915.021-1.76.657-2.138 1.66-.643 1.703-.322 3.905-.27 5.687a86.51 86.51 0 00.434 6.53c.226 2.146.526 4.284.9 6.409.188 1.073.398 2.145.628 3.212.072.336.163.636.272.915.112.526.233 1.05.362 1.57.84 3.405 2.167 6.815 4.7 9.327 2.637 2.62 6.22 4.359 9.548 5.914 3.169 1.482 6.49 2.798 9.897 3.83 2.96 1.342 6.13 2.403 9.311 2.96 3.503.616 7.185.654 10.568-.564a18.61 18.61 0 004.66-2.472c2.022-1.05 3.841-2.494 5.33-4.405 2.668-3.424 3.941-7.58 4.499-11.864.142-1.097.678-5.3.72-5.954l.409-6.34c.064-.998-1.16-1.283-1.803-.748z" />
        </g>
      </g>
    </svg>
  )
}

export default SvgPeep25
