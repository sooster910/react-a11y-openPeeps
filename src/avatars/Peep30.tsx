import * as React from 'react'
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgPeep30({
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
          d="M192.796 271.477c-.513-4.762-.829-9.558-1.01-14.344-.18-4.78.056-9.619.16-14.401.212-9.729.556-19.48-.218-29.193-.732-9.18-2.412-18.296-5.062-27.117-1.291-4.295-2.652-8.764-4.775-12.733-2.134-3.99-5.516-6.648-9.23-9.085-3.955-2.595-7.878-5.239-11.817-7.858-3.307-2.198-9.258-4.757-11.971-7.695-2.855-3.093-3.392-10.758-5.293-14.42-1.851-3.569-7.093-5.896-11.128-5.896-6.68 0-11.74-.342-17.233 5.84-2.74 3.084-.56 6.202-3.433 9.162-2.64 2.721-9.394 5.518-12.798 7.098a139.04 139.04 0 01-12.496 5.048c-4.326 1.518-8.76 2.649-13.11 4.08-4.169 1.374-9.613 7.032-12.85 10.025-3.008 2.784-3.755 2.472-6.043 5.853-5.02 7.421-10.046 14.927-14.044 22.962-1.992 4.002-3.92 8.212-4.643 12.656-.77 4.74-.006 9.322 1.244 13.912 1.272 4.671 5.312 9.118 6.628 13.778.607 2.147-1.475 4.49-.518 6.513.479 1.01 1.081 1.91 1.767 2.791.528.678 2.589.528 2.855 1.358.27.84-1.221 2.58-1.243 3.447-.032 1.243-.081 2.485-.122 3.727l-.24 7.343-.475 14.477c-.052 1.575-.128 3.114.25 4.609a3.342 3.342 0 01-.384-.419c-.346-.452-1.08-.068-.787.46.49.883 1.196 1.505 2.025 1.951.963 1.42 146.827 4.593 147.545.44.403-2.33-.33-4.824-.623-7.14-.305-2.41-.668-4.812-.928-7.23z"
          fill="#FFF"
        />
        <path
          d="M44.626 211.468c.357-1.023 1.989-.58 1.63.449-1.848 5.293-.537 11.054 1.46 16.107.4 1.014-1.235 1.45-1.63.45-2.1-5.316-3.4-11.447-1.46-17.006m12.386 30.236c5.21.733 10.424 1.185 15.67 1.55.234.018.437-.018.612-.094a304.755 304.755 0 00-.382 7.213c-1.43-.04-2.89.055-4.308.017a118.006 118.006 0 01-16.242-1.583c-1.322-.222-3.002-.357-4.508-.797-1.424-.416-2.692-1.105-3.357-2.403-.567-1.099-.67-2.445-.67-3.66 0-.837.144-1.687.23-2.53.108-.076.205-.167.283-.268 1.572.496 3.203.845 4.8 1.183 2.601.554 5.24 1.002 7.872 1.372m-2.938-19.542a8.34 8.34 0 001.345 4.443c.588.92-.876 1.767-1.46.853-1.023-1.601-1.542-3.399-1.575-5.296-.02-1.09 1.67-1.087 1.69 0m133.548 17.623c.705.039 1.415.063 2.123.1.624.535 1.488.808 2.277.638.027.069.052.145.075.234.139.543.209 1.126.289 1.68.08.545.142 1.095.184 1.644.021.277.154.903-.015 1.144-.152.217-.488.198-.72.226-.626.067-1.26.1-1.89.152l-3.565.31c-1.164.102-2.443.07-3.581.377-.195-2.285-.372-4.57-.537-6.856 1.764.26 3.609.253 5.36.35m-147.913-3.789c.71 1.372 1.365 2.72 2.724 3.544.177.106.376.163.578.178a21.28 21.28 0 00-.331 1.938c-.186 1.36-.226 2.764.114 4.104.331 1.304.88 2.47 1.958 3.304.501.389 1.048.685 1.623.92a1.892 1.892 0 00-.125.84c-.137.691-.228 1.395-.327 2.07a145.617 145.617 0 00-.607 4.5c-.342 2.992-.61 5.985-.836 8.988a297.219 297.219 0 00-.524 8.995c-.07 1.535-.131 3.069-.188 4.605-.057 1.58-.313 3.194.384 4.659.562 1.183 2.462 1.115 3.045 0 .739-1.419.521-3.103.54-4.659.02-1.464.045-2.931.077-4.396.063-2.999.156-5.996.23-8.995.072-2.927.16-5.852.22-8.78.03-1.532.031-3.064.04-4.596.004-.85.04-1.756-.024-2.642.529.125 1.061.23 1.587.338a110.19 110.19 0 0012.158 1.796c2.052.186 4.11.317 6.167.392 1.513.054 3.08.16 4.617.103a318.88 318.88 0 00-.17 11.012c.005 2.648.04 5.296.106 7.944.036 1.393.066 2.786.108 4.178.019.626.019 1.258.061 1.881.013.195.04.383.076.57-.14.394-.255.785-.35 1.151-.465 1.775-.465 3.481-.258 5.29.177 1.534 1.468 2.957 3.173 2.418.277-.087.554-.178.828-.27 2.51.285 5.035.35 7.58.399 3.72.072 7.443.095 11.166.114 7.301.038 14.605.057 21.908.078 14.677.042 29.354.082 44.03.125 4.074.013 8.147.023 12.22.036 2.109.006 4.213.008 6.32.089.982.038 1.966.09 2.949.105 1.138.02 2.146-.308 3.234-.606.615-.172.858-.789.727-1.31.985.234 2.178-.265 2.514-1.374a3.333 3.333 0 00-.211-2.425v-.002c-.706-4.457-1.602-8.894-2.305-13.353-.771-4.884-1.513-9.779-2.166-14.682-.49-3.703-.893-1.078-1.242-4.798 1.52.118 3.237-.344 4.741-.541 1.08-.14 2.168-.252 3.25-.4-.081 1.09-.058 2.203-.087 3.249-.057 2.077-.032 4.146.02 6.224.102 4.01.328 1.676.69 5.668a273.9 273.9 0 001.356 12.033c.279 2.06.577 4.119.891 6.175.146.96.296 1.917.45 2.877.184 1.13.243 2.202 1.09 3.052.645.644 1.961.59 2.388-.309.54-1.135.296-2.107.095-3.299a359.017 359.017 0 01-1.41-9.035c-.565-3.963-1.1-7.932-1.577-11.905-.482-4.006-.98-1.666-1.454-5.671-.239-2.02-.477-4.037-.756-6.051-.142-1.036-.23-2.139-.416-3.206l.177-.03c1.285-.235 2.381-.96 2.704-2.283.309-1.266-.059-2.722-.319-3.964-.222-1.059-.422-2.41-1.103-3.317 2.4-3.058 3.96-6.906 4.957-10.606 1.084-4.03 1.538-8.238 1.634-12.403a73.24 73.24 0 00-1.078-14.342c-.02-1-.066-1.999-.14-2.997-.727-9.798-3.777-21.395-13.45-25.973a2.154 2.154 0 00-.118-.053c-.758-.907-1.705-1.723-2.47-2.485a50.66 50.66 0 00-4.269-3.839c-2.97-2.36-6.228-4.246-9.615-5.943-3.424-1.718-6.9-3.33-10.246-5.205-2.916-1.636-5.54-3.606-8.03-5.83-2.8-2.5-4.792-5.87-5.574-9.55-.04-.193-.325-.14-.33.044-.204 6.744 4.346 12.704 9.584 16.475 6.262 4.504 13.823 6.636 20.174 11.003 1.578 1.084 3.055 2.308 4.46 3.607-2.153-.22-4.344-.08-6.362.516-.794-.049-1.593-.063-2.39-.101a1233.672 1233.672 0 00-38.51-1.283c-14.663-.26-29.346-.31-44.008.114-3.976.114-24.883-.678-26.819-.455 2.846-2.464 5.969-4.476 9.402-6.13 4.295-2.066 8.734-3.444 13.32-4.703 9.446-2.594 19.255-5.094 26.814-11.682a27.383 27.383 0 004.914-5.607c1.306-1.99 2.758-4.54 2.793-6.968.026-1.724-2.374-2.352-3.228-.875-.53.915-.792 1.919-1.225 2.879a21.03 21.03 0 01-1.51 2.745c-1.118 1.725-2.504 3.263-4.013 4.652-3.215 2.963-7.11 5.134-11.142 6.776-9.152 3.726-19.162 5.298-27.834 10.21-3.795 2.15-7.426 5.115-9.706 8.898a22.02 22.02 0 00-1.099.2c.273-.344.548-.688.824-1.03.182-.225-.099-.52-.32-.322-4.313 3.838-8.285 7.983-11.885 12.501-3.443 4.325-6.655 8.856-8.928 13.92-4.086 9.097-4.986 19.501-2.875 29.228a45.932 45.932 0 002.419 7.754 48.647 48.647 0 001.751 3.817"
          fill={props.color}
        />
        <path
          d="M110.173 51.541c32.022-1.575 53.749 23.688 54.684 33.762.648 6.994.208 16.32.208 22.569 0 3.19 1.609 12.885-.208 17.534-4.045 10.347-8.615 18.452-21.278 18.452-12.663 0-31.967-6.565-38.596-15.034-1.21-1.546-16.249-12.864-16.249-21.76 0-18.98-1.41-54.399 21.44-55.523z"
          fill="#FFF"
        />
        <path
          d="M88.328 31.042c1.825-.571 2.99.25 3.82 1.523.184-.036.361-.033.558.014.05.012.167.057.257.092.069.029.131.064.191.101l.036-.019c.137-.15.28-.285.436-.395a1.416 1.416 0 011.05-.268l.158-.058c1.35-.471 2.815-.253 3.73.911.178.225.321.476.444.74.274.09.532.22.754.38.156-.073.32-.135.497-.18.997-.256 2.044-.015 2.856.597.395.297.686.67.907 1.095.251.059.5.165.732.307.2-.1.403-.193.61-.257a6.486 6.486 0 012.37-.26c1.706.126 3.356 2.076 2.216 3.75l-.036.05c-.144.202-.27.41-.387.623.408.178.802.415 1.165.713 1.778 1.458 1.938 3.704 1.605 5.824l-.014.088h.004c.945.09 1.76 1.076 1.202 2.004l-.027.044c-.755 1.167-1.403 2.457-2.124 3.685a33.564 33.564 0 00-5.735 2.681c-1.13.99-2.204 2.036-3.15 3.2a18.228 18.228 0 00-1.305 1.834.905.905 0 001.046-.163c2.962-2.746 6.54-4.672 10.35-5.964a.928.928 0 00.556-.476 41.675 41.675 0 015.15-1.12c.48-.457.982-.894 1.459-1.349.609-.58 1.372-.572 1.942-.207.283-.13.572-.243.866-.346l.183-.062c.076-.025.148-.054.223-.076 2.04-.624 3.905-.393 5.912.12l.256.067c.936.248 1.524.208 2.43-.02l.102-.026c.962-.251 1.992-.437 2.975-.173 1.03.277 1.712.892 2.413 1.636l.07.074c.328.35.517.389.945.38l.459-.013c1.73-.048 3.426.025 4.723 1.365.479.495.993 1.196 1.302 1.836l.045.095.039.08c.186-.03.475-.147.613-.174 1.886-.366 3.46.198 4.672 1.685.265.326.665.965.943 1.316.097.083.189.171.275.264.455.29 1.1.272 1.61.374 1.39.277 2.875.806 3.582 2.129.296.552.405 1.156.53 1.76.467.307.833.75 1.117 1.229.346.581.493 1.294.89 1.843.29.4.732.612 1.152.856l.16.094c1.246.742 2.22 1.566 2.63 3.019l.036.13c.067.222.3.857.097.762.175.096.472.13.632.183.864.286 1.615.748 2.075 1.56.35.617.414 1.26.514 1.942l.043.275c.01.066.024.143.037.218l.014.074.002.001c.157.068.31.141.462.22.716.422 1.205 1.154 1.205 2.001 0 .412-.128.732-.315 1.018.15.23.268.473.356.745.174.531.186 1.112.128 1.662-.07.66-.24 1.26-.439 1.89-.076.242-.108.582-.223.814.213.272.34.605.3.933-.056.469-.27 1.017-.695 1.28-.207 1.025-.654 2.073-1.094 2.91a1.15 1.15 0 01-.18.257c.061 3.345-.184 6.714-.2 10.056-.02 3.637.056 7.277.183 10.91.214 6.02.976 12.247-.8 18.119-1.454 4.806-4.365 8.931-8.27 12.06a24.386 24.386 0 01-13.933 5.34c-2.602.146-5.25-.15-7.768-.824l-.269-.073c-2.436-.67-5.259-1.693-7.051-3.484-.947-.947.01-2.953 1.398-2.401 1.376.547 2.61 1.357 3.974 1.927 1.22.51 2.491.9 3.78 1.188 2.584.581 5.324.708 7.95.347 9.481-1.298 16.87-9.175 18.327-18.515.404-2.586.396-5.215.369-7.829l-.03-2.863c-.023-2.396-.032-4.793.056-7.188.112-3.081.33-6.16.621-9.23l.152-1.596c.18-1.868.384-3.75.734-5.594-.287.015-2.55-3.856-3.804-6.019-.459-.363-.845-.815-.995-1.4a2.178 2.178 0 01-.057-.368c-.272-.428-.56-.845-.863-1.25l-.066-.03a1.676 1.676 0 01-.114-.056 4.32 4.32 0 01-1.91-2.295 22.294 22.294 0 00-1.698-1.51l-.178-.136c-.755-.282-1.418-.707-1.901-1.318a28.319 28.319 0 00-.61-.368 4.984 4.984 0 01-1.843-.398c-1.108-.455-1.992-1.354-3.104-1.77-1.176-.44-2.415.56-3.665.38a3.236 3.236 0 01-.929-.284c-.704.745-1.45 1.448-2.274 2.063-1.195.894-2.417 1.302-3.802 1.705-.687.652-1.455 1.283-2.382 1.376-2.145 1.716-4.44 3.162-6.853 4.506a2.368 2.368 0 01-1.14.316 9.68 9.68 0 01-2.458 1.094c-.273.08-.555.096-.833.062l-.757.618c-.528.43-1.09.634-1.628.648-.328.25-.667.488-1.016.716-.374.245-.86.347-1.347.317-.745.729-1.71.805-2.52.47a3.958 3.958 0 01-.896.396 3.997 3.997 0 01-3.314 1.261c-.924.566-2 .86-3.05.794-.16.806-.293 1.615-.405 2.426l-.012.594a6.419 6.419 0 000 .221v.02c.104 2.606.16 5.213.261 7.819l.01.206c.115 2.276.675 6.428-2.67 6.337-1.247-.033-2.484-.952-3.454-1.707l-.137-.107-.228-.177c-.725-.095-1.44-.271-2.173-.298a10.634 10.634 0 00-2.736.266c-1.555.362-3.06 1.07-4.073 2.353a4.99 4.99 0 00-.25.348 1.848 1.848 0 01-.357.662c-.959 2.158-.405 5.01.655 6.983 1.264 2.351 3.263 3.977 5.777 4.795l.126.04c1.718.538 2.375 1.577 3.309 3.023.874 1.357 1.878 2.62 2.955 3.821 2.085 2.323 5.012 4.24 6.224 7.18.245.592-.456 1.15-1 .998-2.127-.599-3.618-2.114-5.165-3.62a47.057 47.057 0 01-3.065-3.27 2.208 2.208 0 01-.658.185c-1.024.125-2.081.073-2.978-.48a1.535 1.535 0 01-1.164-.399 5.152 5.152 0 01-.76-.871 3.794 3.794 0 01-.949-.014 1.217 1.217 0 01-.42-.116 1.846 1.846 0 01-.682-.47c-.427-.458-.59-1.106-.512-1.722a2.259 2.259 0 01-1.537-1.163 4.79 4.79 0 01-1.293-1.066 4.637 4.637 0 01-.913-1.66 3.949 3.949 0 01-.552-.31c-1.269-.86-1.995-2.472-1.497-3.962l.017-.047a7.29 7.29 0 01.127-.31c-.008-.106-.016-.21-.022-.316l-.018-.317-.254-.108c-1.267-.505-2.124-1.185-2.277-2.612-.031-.295.083-.596.264-.848l-.001-.079a3.033 3.033 0 01-.23-.13c-.691-.442-1.116-1.233-1.068-2.051.044-.746.457-1.341.921-1.89l.133-.155.036-.042-.307-.096a2.947 2.947 0 01-.513-.2c-.508-.285-.938-.67-1.204-1.159-.038-.06-.078-.12-.113-.185-.343-.626-.388-1.428-.167-2.1.027-.079.06-.153.095-.228-.934-.329-1.653-1.01-1.74-2.264a2.535 2.535 0 01.31-1.405 2.947 2.947 0 01-.03-.868c-.328-.31-.584-.684-.698-1.14-.215-.863.18-1.683.766-2.435a2.579 2.579 0 01.02-1.865 3.18 3.18 0 01-.153-.939 3.063 3.063 0 01.572-1.829c-.502-.614-.74-1.43-.444-2.195a9.65 9.65 0 01.73-1.502 3.043 3.043 0 01-.23-1.182c0-.79.296-1.417.749-1.93-.197-.935.203-2.075 1.075-2.487a7.366 7.366 0 011.253-.445c.182-.568.372-1.134.572-1.697.316-.885.656-1.757 1.016-2.62-.207.182-.425.351-.65.505a9.36 9.36 0 01-2.445 2.155c-1.57.93-3.366.378-4.141-1.176-.729.544-1.603.866-2.536.756-1.057-.125-2.024-.81-2.288-1.879a2.186 2.186 0 01-.064-.49c-.606.432-1.241.83-1.937 1.057-.887.29-1.792-.406-1.909-1.272a1.47 1.47 0 01.155-.903l-.087-.034a1.962 1.962 0 01-1.04-1.097c-1.007.39-2.16-.068-2.48-1.175a7.75 7.75 0 01-.105-3.933c-1.067-.776-1.762-2.08-1.88-3.443-.087-.979.147-1.882.558-2.717-1.009-.378-1.356-1.7-.876-2.654-.637-.365-1.053-1.138-1.062-1.89-.284-.432-.376-.987-.14-1.61.312-.82.945-1.505 1.671-2.043a6.604 6.604 0 01-.697-1.773 1.64 1.64 0 01-1.186-1.394 1.716 1.716 0 011.29-1.897 5.3 5.3 0 01.336-.814c-.401-.951-.342-2.154.175-3.194.459-.919 1.205-1.481 2.102-1.87-.228-.782.074-1.562.835-2.143a11.137 11.137 0 013.017-1.637c-.095-1.273.437-2.577 1.694-3.02a3.067 3.067 0 011.042-.161c.258-.562.689-1.018 1.25-1.422.851-.612 2.441-.238 2.913.72l.023.05c.024.054.05.103.075.156.095-.465.317-.905.674-1.265.893-.901 1.836-.918 2.744-.533a6.12 6.12 0 01.613-1.165c.89-1.302 2.36-1.468 3.435-.763a4.01 4.01 0 011.446-.838zm6.36 78.34c1.792-.701 3.966-.494 5.736.18l.13.05c1.564.62 4.104 1.995 4.41 3.755.16.91-.707 1.699-1.586 1.22-.765-.417-1.194-1.256-1.802-1.865-.602-.602-1.276-1.086-2.011-1.511-1.534-.886-3.146-1.23-4.876-1.486-.195-.027-.142-.287 0-.342z"
          fill={props.color}
        />
        <path
          d="M149.372 128.003c-1.35.011-2.868-.496-3.883-.893l-.265-.105c-.878-.352-1.78-.756-2.454-1.434-.215-.22-.444-.47-.56-.732-.069-.154-.097-.313-.031-.47.243-.025.474-.056.692-.096.104-.019.204-.039.28-.039.282-.002.56.034.839.07l.12.014c.217.027.433.056.648.085.626.084 1.25.168 1.884.198.459.022.94-.004 1.425-.03 1.258-.069 2.559-.162 3.528.72.254.23.36.521.36.818 0 .36-.151.726-.382 1.014-.523.65-1.329.873-2.2.88zm7.364-11.354c-.588.882-1.566 1.449-2.908 1.387-2.665-.122-5.846-1.128-8.079-2.582-.581-.38-.958-.985-1.026-1.633l-.12-1.154-.65.96-.204.3c-.188.276-.376.55-.554.833a37.063 37.063 0 00-1.872 3.322c-.402.812-.695 1.72-.99 2.637-.496 1.547-.976 3.068-2.038 4.155-.16.165-.407.224-.633.195-.199-.026-.394-.124-.49-.318-1.268-2.58.438-5.69 1.822-7.851l.146-.226c1.284-1.953 3.38-4.538 5.78-4.89l.274.439.4-.267c.653-.435 1.515-.415 2.27-.074l.755.34c1.406.632 2.792 1.214 4.313 1.533a12.819 12.819 0 00.647.118 19.525 19.525 0 00-.24-.972c-.123-.444-.26-.884-.423-1.314-.614-1.619-1.595-3.133-2.549-4.577l-.112-.17a35.393 35.393 0 00-.441-.646c-.744-1.071-1.57-2.234-1.628-3.402.988.062 1.814.676 2.541 1.21a19.32 19.32 0 012.763 2.481c1.627 1.767 3.088 4.024 3.729 6.358.366 1.337.205 2.775-.483 3.808zm-26.042-13.315v-.047c.002-1.348.787-4.425 2.727-4.425 1.211 0 1.947 2.094 2.074 4.253l.005.088c.056 1.342-.312 4.276-2.08 4.276-1.785 0-2.708-2.779-2.726-4.145zm28.554-.422v-.048c-.003-1.348-.788-4.425-2.727-4.425-1.181 0-1.91 1.99-2.064 4.091l-.01.162c-.077 1.297.267 4.364 2.074 4.364 1.786 0 2.708-2.779 2.727-4.144zm-22.022-8.699c-.257.03-.513.07-.769.11-.746.12-1.487.262-2.224.428-1.4.316-2.787.715-4.148 1.166-1.274.422-2.529.9-3.782 1.376l-.201.076a35.4 35.4 0 00-1.327.547c-.673.288-1.35.578-2.04.796 1.819-2.516 4.622-4.38 7.32-5.715 1.538-.76 3.171-1.375 4.813-1.878l.915-.275c1.347-.397 2.82-.764 4.084.028.5.314.82.801.92 1.328a1.905 1.905 0 01-.37 1.533c-.31.402-.698.632-1.11.71-.455.087-.937-.008-1.375-.243-.352-.026-.456-.016-.56-.005l-.146.018zm20.26.256a11.06 11.06 0 00-2.719-.246 9.45 9.45 0 00-1.226.142c-.627.101-1.251.205-1.926.083-.353-.064-.653-.27-.884-.54a2.24 2.24 0 01-.508-1.098c-.06-.395 0-.74.146-1.045.172-.36.463-.664.814-.93 1.063-.805 2.887-.611 4.141-.449 1.24.162 2.472.546 3.568 1.157a8.639 8.639 0 012.754 2.407c.619.837.91 1.8 1.21 2.78-1.414-1.187-3.579-1.872-5.37-2.26z"
          fill={props.color}
        />
      </g>
    </svg>
  )
}

export default SvgPeep30
