import * as React from "react";

function SvgPeep1({ title, titleId, ...props }) {
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
          d="M47.464 286.051c27.601 4.194 55.703 4.405 83.534 2.882 11.014-.825 22.062-.973 33.067.081 6.503.484 35.016 2.665 37.345-3.162-1.466-31.027-4.435-62.319-13.545-92.16-3.746-10.595-6.964-19.39-14.276-28.157-2.305-2.394-7.275-7.415-10.122-9.053-2.467-1.418-3.499-.912-4.915-3.308-1.408-2.647-2.446-7.067-4.445-8.934-2.035-1.902-5.051-1.222-8.79-.61.687-9.284-3.597-11.649-9.5-13.414-10.373-3.961-20.619-1.971-23.23 10.663-4.841 0-7.561 2.084-10.501 4.087-1.202.818-.366 2.904-1.801 3.547-2.656.946-7.35.715-9.907 1.879-11.629 5.294-21.986 12.972-28.788 24.184-15.25 23.939-25.725 74.366-23.912 102.74-.794 1.245.304 3.032.583 4.371.352 1.166 1.493 1.941 2.684 1.808 1.662 1.788 4.232 2.186 6.52 2.556z"
          fill="#FFF"
        />
        <path
          d="M161.71 155.78c-.17-.094-.021-.336.15-.256 8.185 3.841 14.464 10.581 18.883 18.368 4.575 8.064 7.183 17.218 9.43 26.166l.082.324c2.397 9.572 4.435 19.243 6.27 28.937 1.86 9.818 3.35 19.696 4.55 29.615a402.747 402.747 0 011.537 14.74c.206 2.46.393 4.923.562 7.386.067.985.13 1.97.184 2.956l.04.74c.033.67.113 1.343-.053 2.004-.143.57-.445 1.087-.71 1.611-.526 1.035-1.965.865-2.531 0l-.165-.252c-.375-.58-.687-1.12-.805-1.841-.114-.7-.118-1.433-.169-2.139-.094-1.3-.174-2.6-.265-3.9a481.912 481.912 0 00-.645-8.205c-.472-5.395-.977-10.785-1.598-16.165a520.433 520.433 0 00-4.12-28.583c-1.595-9.266-3.61-18.438-5.714-27.598l-.217-.948c-3.683-15.994-9.358-34.412-24.697-42.96zm-87.188 62.628c.06-.16.319-.197.363 0 .551 2.484.606 5.042.69 7.584.083 2.509.08 5.028.043 7.538-.135 9.224-.388 18.44-.607 27.663-.11 4.613-.212 9.227-.29 13.84-.03 1.731-.055 3.461-.076 5.192l-.026 2.282c-.012 1.01-.039 2.006-.162 3.014-.081.663-.254 1.296-.62 1.864-.26.403-.63.608-.99.882l-.068.052c-.46.364-.945.367-1.4 0l-.133-.104c-.435-.34-.811-.607-1.089-1.145-.387-.75-.448-1.563-.514-2.388-.1-1.251-.034-2.52-.02-3.775.025-2.518.06-5.034.104-7.551.162-9.23.482-18.462 1.066-27.675.275-4.34.648-8.694 1.148-13.016l.095-.81c.152-1.272.29-2.566.446-3.865a28.446 28.446 0 01-6.118-5.879c-.128-.166.083-.398.238-.238 1.783 1.847 3.827 3.319 6.09 4.476.37-2.718.88-5.421 1.83-7.94zm38.884-82.276c.032-.024.082-.035.112 0 .5.584.4 1.476.415 2.215l.002.07c.036 1.08.043 2.158.04 3.24l-.012 3.443c-.001.473-.04.966-.016 1.442l.013.185c.263.269.385.658.296 1.049-.016.501-.278.92-.66 1.182l.819 1.163.82 1.162c1.69 2.397 3.398 4.774 5.179 7.106a97.279 97.279 0 005.78 6.865c.99 1.075 1.996 2.135 3.027 3.17.419.422.848.833 1.272 1.248l.423.417c.25.25.563.497.729.813.097.187.12.647.154.723.313.687-.22 1.784-1.107 1.44l.04-.026c.162-.112.058-.114-.31-.005-.233 0-.45-.054-.654-.16l-.06-.033c-.287-.146-.543-.428-.776-.654l-.058-.055c-.532-.499-1.04-1.028-1.55-1.55a89.16 89.16 0 01-3.116-3.343 104.856 104.856 0 01-5.723-7.092c-1.84-2.489-3.55-5.106-5.02-7.83a55.15 55.15 0 01-1.56-3.154c-.954-.306-1.175-1.322-1.109-2.466-.352-.82-.67-1.658-.857-2.513-.025-.117.125-.228.216-.125.305.347.587.716.86 1.095.163-.802.37-1.54.468-2.011l.423-2.077c-2.384-.124-4.997.856-6.641 2.571-.088.447-.432.767-.767 1.184a7.253 7.253 0 00-.966 1.574c-.553 1.242-.24 3.072-1.313 3.983-.112.095-.237.16-.365.202.508 2.495.277 5.245.266 7.777v.223c.003 2.833-.092 5.67-.202 8.5l-.11 2.803c-.145 3.737-.239 7.475.124 11.192a83.513 83.513 0 018.71-6.745l.983-.657c1.179-.791 2.386-1.605 3.677-2.171 1.688-.74 3.293-.486 4.923.273 1.623.757 3.197 1.635 4.789 2.455 1.62.834 3.242 1.66 4.863 2.49 1.074.548 2.648 1.044 3.436 2.054.05-.223.109-.446.177-.668a1.474 1.474 0 01.142-1.054c2.647-4.866 5.097-9.848 7.529-14.824 1.23-2.518 2.401-5.066 3.635-7.583l1.199-2.451c.2-.409.4-.817.603-1.224.303-.61.618-1.214.923-1.823.13-.257.292-.512.418-.772l.06-.13c.002-.006.293-.92.068-.833l-.02.01c-.114.064-.205-.08-.131-.172.317-.393.76-.045.94.318.5 1-.415 2.57-.767 3.527l-.019.054c-1.091 3.09-2.327 6.121-3.593 9.142-2.427 5.793-5.034 11.496-7.636 17.21l-.03.098c.554-.425 1.146-.811 1.654-1.187 1.28-.949 2.596-1.85 3.911-2.749 2.412-1.648 4.888-3.187 7.406-4.666l.504-.295c1.258-.733 2.504-1.327 3.997-1.107 1.387.204 2.676.95 3.929 1.555l.13.062 3.87 1.841a156.67 156.67 0 00-1.329-4.93 179.14 179.14 0 00-6.28-18.205l-.35-.864c-.473-1.184-.944-2.475-2.298-2.84-1.354-.365-2.906.176-4.142-.596-.113-.07-.099-.255.037-.29l.764-.192c1.432-.356 3.112-.715 4.467-.368 1.475.377 2.694 1.615 3.41 2.902.795 1.432 1.356 3.034 1.96 4.56l.095.24c.693 1.728 1.36 3.466 1.997 5.215a175.82 175.82 0 013.486 10.604c.506 1.72.986 3.449 1.448 5.181.132.499.351 1.103.53 1.733.207.201.401.425.584.68.303.425.086.922-.291 1.176-.015.433-.111.841-.341 1.19-.9 1.366-3.276 1.014-3.18-.821.015-.28.125-.55.29-.776l-.004-.036-.02-.068c-.412-.197-.826-.418-1.263-.634l-4.063-2.008c-1.177-.582-2.481-1.48-3.79-1.703-1.22-.206-2.507.703-3.555 1.252l-.068.035c-2.534 1.3-5.05 2.642-7.555 3.995-1.223.661-2.43 1.35-3.649 2.018-1.018.56-2.118 1.362-3.263 1.678-.489.38-1.07.33-1.537.042.214 1.322.2 2.678.266 4.03.088 1.807.102 3.619.13 5.428l.012.678c.077 4 .118 8.001.134 12.002.054 14.247-.104 28.498-.14 42.745-.019 7.158-.16 14.322-.347 21.477-.078 3.032-.243 6.06-.421 9.088l-.098 1.651c-.207 3.484-.33 7.007-.975 10.444-.084.448-.842.46-.916 0-.594-3.683-.627-7.447-.74-11.173l-.025-.745c-.137-4-.202-8-.188-12.002.05-14.253.42-28.496.724-42.744.152-7.16.255-14.321.491-21.478.118-3.58.252-7.16.411-10.739.071-1.598.14-3.195.246-4.79l.048-.684c.032-.446.06-.887.091-1.324-1.441.527-2.76-.448-4.056-1.115-1.495-.77-2.988-1.54-4.484-2.308l-1.496-.766-2.995-1.528c-1.348-.689-2.387-1.374-3.825-.566-5.18 2.907-9.942 6.776-14.256 10.836-.827.779-2.576.57-2.785-.735-.895-5.575-.351-11.23.106-16.821l.169-2.076c.204-2.48.426-4.959.722-7.428.133-1.105.265-2.209.41-3.311l.113-.827c.183-1.307.302-2.606.691-3.859a.9.9 0 01-.346-.205c-1.17-1.11-.606-3.037-.072-4.358.527-1.304 1.33-2.442 2.337-3.421.22-.214.53-.352.84-.359 2.441-1.618 5.119-2.425 7.905-1.542.079-.374.159-.748.243-1.121l.085-.373c.217-.925.297-2.453 1.095-3.072zm25.015 146.09a2.219 2.219 0 012.142.566 2.2 2.2 0 01-.892 3.657l-.08.023-.123.052a2.143 2.143 0 01-2.635-2.636l.051-.124a2.197 2.197 0 011.537-1.538zm44.973-75.503c.124-.143.326.04.249.192-1.18 2.314-2.495 4.611-3.787 6.866.103.625.206 1.245.324 1.85.503 2.575 1.12 5.104 1.522 7.704 1.445 9.345 2.195 18.793 2.84 28.222.645 9.464.727 18.931.824 28.413.009.822-.623 1.777-1.47 1.932-.387.07-.678.057-1.064 0-.882-.13-1.433-1.14-1.47-1.932-.253-5.3-.593-10.592-.987-15.883-.698-9.38-1.125-18.786-1.688-28.176l-.199-3.282c-.213-3.556-.408-7.115-.472-10.676-.042-2.36.084-4.718.007-7.075-.072-2.176-.292-4.542.187-6.68.018-.08.144-.1.181-.023.499 1.05.814 2.19 1.058 3.356 1.285-1.626 2.593-3.255 3.945-4.808zm-84.168-57.476c.18-.013.173.258 0 .278-2.522.293-4.958 1.32-7.34 2.192l-.203.074c-2.406.873-4.75 1.889-7.008 3.099-4.413 2.366-8.465 5.417-12.047 8.91-14.304 13.943-20.823 34.05-25.6 52.945-2.653 10.498-4.54 21.174-5.764 31.93a241.102 241.102 0 00-1.523 24.239 311.747 311.747 0 00-.021 4.217c0 .644.116 1.455-.057 2.08-.16.58-.61 1.09-.943 1.573-.395.572-1.104.542-1.505 0l-.147-.198c-.427-.566-.845-1.108-.906-1.849-.065-.794-.02-1.612-.022-2.41-.007-1.606.013-3.213.045-4.819.062-3.078.183-6.155.363-9.23.366-6.237.969-12.463 1.831-18.652 1.533-11 3.83-21.896 6.84-32.587 2.84-10.085 6.204-20.141 10.996-29.483 4.449-8.674 10.286-16.743 17.988-22.805 3.581-2.82 7.48-5.168 11.684-6.938 2.12-.892 4.346-1.62 6.61-2.036 2.24-.41 4.469-.353 6.729-.53zm39.63 115.152c.4-.003.845.085 1.189.306l.458.355.371.48c.287.374.325.979.265 1.424a1.663 1.663 0 01-.265.83l-.35.452c-.335.274-.614.47-1.02.6a1.692 1.692 0 01-.621.073l-.068-.004.04.006-.07-.008a4.057 4.057 0 01-.2-.022l-.137-.016a.743.743 0 00-.13-.001c-.517.048-1.036-.244-1.402-.581-.33-.303-.627-.946-.58-1.402l.019-.19c.035-.322.063-.449.2-.771.132-.315.316-.592.568-.826a2.527 2.527 0 011.733-.705zm-1.599-23.52c.686-.747 1.863-.802 2.712-.35.208.11.398.287.58.435.46.372.64 1.043.666 1.608.025.56-.27 1.223-.666 1.61l-.096.092c-.237.23-.576.431-.907.492-.535.098-.983.095-1.48-.115a2.268 2.268 0 01-1.047-.864l-.041-.066a1.43 1.43 0 01-.049-.085l-.022-.043c-.476-.916-.348-1.953.35-2.714zm.355-23.643c.31-.097.618-.111.927-.042.21 0 .406.054.587.159.197.055.368.155.513.3.174.102.314.241.417.416.205.225.344.488.416.791l.083.618-.083.619-.234.555a30.9 30.9 0 01-.195.252 1.17 1.17 0 01-.418.419 1.163 1.163 0 01-.39.256 2.18 2.18 0 01-1.821.324 2.143 2.143 0 01-1.501-1.502l-.042-.291c-.055-.39-.063-.606.047-1.102.049-.218.19-.526.263-.655.314-.553.828-.932 1.431-1.117zm26.838-17.01c.888-.006 1.775-.005 2.662.005l.666.009c1.114.018 2.069-.097 2.945.676.636.561.356 1.503-.248 1.926-.914.64-2.062.318-3.113.248a160.141 160.141 0 00-9.779-.353 316.31 316.31 0 00-6.443.046c-2.184.035-4.458.239-6.63.013-.298-.031-.365-.424-.07-.526 2.046-.708 4.348-.938 6.493-1.209a97.847 97.847 0 016.65-.605c2.287-.131 4.577-.214 6.867-.23zm-26.842-6.957l.073.002c.391 0 .757.093 1.097.276l.073.04.47.363c.286.29.485.63.595 1.023l.083.616c.012.32-.055.617-.2.893a1.74 1.74 0 01-.479.746c-.21.226-.459.386-.746.48a1.74 1.74 0 01-.82.2h-.073a2.307 2.307 0 01-1.169-.317l-.47-.363a2.315 2.315 0 01-.595-1.023l-.083-.616c-.012-.32.054-.617.2-.893.093-.288.253-.536.479-.746.21-.226.458-.386.746-.48.255-.134.528-.2.82-.2zm6.87-54.458c.5-.724 1.404-.08 1.275.501.034 1.634.118 3.22.49 4.82.17.732.392 1.465.736 2.136l.144.283c.445.88.79 1.708.191 2.673-.282.455-.793.797-1.346.773-2.454-.106-2.79-3.523-2.94-5.43-.154-1.965.324-4.124 1.45-5.756z"
          fill="#000"
        />
        <path
          d="M130.31 50.45c9.459 0 20.808 4.588 21.773 4.68l.026.001c.507 0 2.49 1.512 5.95 4.536l-3.747 7.311.304.29c1.45 1.391 2.69 2.66 3.667 3.66 7.985 8.165 9.42 40.225 7.538 51.405-1.882 11.18-5.367 22.12-21.592 22.12-16.225 0-34.275-9.759-37.056-12.798-1.854-2.026-3.936-2.997-6.247-2.912l-.282-.359-.34-.048c-3.198-.463-5.49-1.087-6.875-1.87-2.704-1.532-5.677-9.58-5.677-11.353 0-1.755-4.44-14.523-4.529-15.874V99.2c0-1.13-5.8-6.321-5.8-7.97 0-1.65-1.17-1.55 0-7.36l.34-1.707c1.243-6.187 3.678-16.431 12.962-20.883 10.201-4.892 30.03-10.83 39.585-10.83z"
          fill="#FFF"
        />
        <path
          d="M89.15 61.051c5.088-5.402 33.973-13.759 48.586-11.987l.439.057c1.166.148 2.315.372 3.45.676 3.666.856 7.453 2.154 10.482 4.32 2.53 1.772 10.508 4.667 8.156 9.304.872 1.652 1.197 3.694.608 5.321-.074.563-.247 1.08-.469 1.617 1.863 2.75 3.338 5.86 4.532 8.818 2.086 7.444 3.384 15.19 3.574 22.785.633 14.43-.949 31.665-13.511 40.996-7.59 5.913-19.477 6.111-28.005-1.22-.484-.572-2.76-2.119-2-2.39.226.239.458.471.695.7a.137.137 0 01-.009-.079l-.222-.201c-.42-.388-.962-.95-.344-.84.027.031.057.059.086.09.131.079.23.147.307.207l.04.032-.012-.013c-.357-.38-.57-.767-.037-.52l.07.034c.237.25.477.489.723.721a.137.137 0 01.015-.084l-.229-.221c-.223-.219-.189-.22-.08-.397-.474-.664.411-.27.473-.01.554-.131 1.04.909 1.397 1.036 15.633 12.023 38.32 1.354 37.953-32.15l-.005-.655c-.108-10.714-1.01-21.725-5.439-31.423a27.905 27.905 0 00-1.442-2.722 26.368 26.368 0 00-1.177-1.927 17.43 17.43 0 01-3.484-.645c-.393-.1-.782-.21-1.17-.338-5.68.31-11.231.647-16.926.966l-1.779.111c-4.824.31-9.813.807-13.706 3.792-3.82 2.718-3.837 8.077-7.107 11.06-4.663 3.166-4.697 6.02-5.594 10.686.066 3.517 2.504 8.627-1.97 10.107.755 1.076-.297.56-.38.182-.008.002-.016.004-.023.004.673 1.25-.316.463-.403.061a.385.385 0 01-.159-.105c.678 1.095-.417.328-.353.128-1.309-2.013-4.003-2.325-5.903-1.792-.023.072-.107.078-.16.04-8.076 1.751-5.992 18.477 2.284 16.86.354-.073.346.098.416.114-.191-.502.348-.298.342-.192l.033-.002c.026-.002.015-.005.035.002-.185-1.027.855.46.773.522a.266.266 0 01.1-.034l-.036-.098c-.173-.46-.158-.269-.157-.532-.13-.326-.14-.183-.109-.395.456-.354.59.718.743.797-.26-.364-.054-.661.192-.464 1.864 3.923 4.272 7.608 7.384 10.511.34.269.685.533 1.041.782 1.324 1.153 3.354 1.895 4.593 2.917a.125.125 0 01-.02.059l.028.026.028.027.431.207a2.3 2.3 0 01.343.361c.107.125.202.262.283.408.04.178-.049.252-.218.176-.074-.026-.148-.055-.222-.083l.011.015c.024.037.188.417 0 .355l-.023-.008c-.104-.038-.207-.08-.309-.12.12.15.23.312.328.45a.715.715 0 01.192.378c-.004.08-.049.114-.129.103-.122-.04-.243-.082-.363-.127l.034.066c.085.168.206.449-.009.355a6.778 6.778 0 01-.539-.194c-.015.03-.044.04-.103.012-.564-.2-1.11-.446-1.631-.735-.459-.334-.921-.662-1.382-.994-.433-.26-.851-.55-1.25-.875a27.244 27.244 0 01-6.867-6.361c-3.103 2.688-9.308.12-13.146-1.985-3.395-1.88-4.73-5.359-5.074-9.109-.717-5.048-4.841-6.776-4.554-17.853-.007.002-.013.002-.022.002a2.151 2.151 0 01-.433-.18 2.164 2.164 0 01-.4-.245l-.153-.213a1.31 1.31 0 01-.207-.137l-.029.036c-.09.11-.03-.055-.024-.087l-.268-.365c-.635-.867-1.332-1.84-1.9-2.62l-.018.032c-.013.024-.02.041-.013.049-1.351-1.942-2.622-4.287-2.975-6.558-.417-1.75-.254-3.552.11-5.172 1.559-5.674 6.665-18.513 13.37-24.016zm36.665 78.465l-.085-.076.075.094a.63.63 0 00.144.135.117.117 0 01-.003-.046 2.833 2.833 0 01-.131-.107zm11.857-87.601c-9.91-.853-19.658 1.331-29.114 3.975l-.653.188c-5.377 1.535-11.063 2.916-15.607 6.201-6.349 4.865-9.627 12.604-12.488 19.749-2.499 5.308-1.221 11.295 2.543 15.001.392-3.683 1.06-7.259 2.104-10.806.217-.554.053-.736.522-.808.709 9.559-2.783 16.621 4.128 27.95 2.998 5.346-.473 9.257 7.995 12.07l.229.087c1.764.666 3.69 1.192 5.418.82l-.155-.252c-.158-.26-.205-.386.024-.497l-.023-.04c-.186-.35-.365-.706-.537-1.065-.07.023-.139.04-.211.06.047.086.053.173-.078.202a3.68 3.68 0 01-1.433.194l-.105-.008a4.838 4.838 0 01-1.213-.228c-.103-.017-.207-.034-.308-.055-1.003-.222-2.064-.788-2.75-1.348-7.83-4.449-7.02-19.592 2.63-21.024.197-9.534 4.73-25.62 12.254-34.705 6.8-8.357 25.365-11.979 38.281-10.702l.565.19c1.993.176 3.892 1.065 5.886 1.477-1.432-1.073-3.056-1.788-4.73-2.396-3.333-2.04-7.154-3.143-10.846-3.922a10.674 10.674 0 00-2.328-.308zM98.148 109.94c.519-.282.46-.01.579-.089 3.732-.305 7.756 2.964 9.843 5.69-.165.17-.61-.336-.69-.417a.095.095 0 01-.035.023l.058.083c.846 1.213-.83-.215-.988-.51a.125.125 0 01-.086.017c.133.13.539.47.608.713l.108.09c1.014.868.93 1.522-.222.288.028.057.038.11.02.152l.039.027c.566.396 1.032 1.5-.152.366.123.828-1.173-.772-1.215-.76-2.243-1.762-5.546-3.475-8.36-3.706l-.096-.01c-.517-.067-.76-.22-.58-.558-.635-.151-.486-.465-.185-.454-.449-.296-.045-.578.215-.468-.179-.495.539-.165.604-.234.373-.575.473-.095.535-.243zm-7.823-30.72c1.792-.657 7.087 1.31 6.664 3.914-.253.598-1.084.94-1.668.603l-.762-.512c-1.327-.89-2.524-1.669-3.948-2.444-.776-.385-1.11-1.202-.286-1.561zm10.198-3.87l-.692-.45c-3.736-2.447-9.017-6.153.35-2.319 1.067.458 2.485.73 3.068 1.746.915 1.875-1.493 2-2.726 1.023zm.42-10.975c-.3-1.138 3.43.197 4.517.55l.165.062c1.057.394 2.267.759 2.9 1.67.74 1.26-.759 1.522-1.687.953-1.903-1.244-3.989-2.183-5.895-3.235zm9.486-5.302c-2.1-2.294 3.52-.096 4.362.514l.024.018c.628.442.5 1.395-.09 1.675-1.679.031-2.914-1.369-4.296-2.207zm9.555-2.513c-3.338-2.4 1.06-1.259 2.586-.318 1.041.918-.03 2.469-2.586.318z"
          fill="#000"
        />
        <path
          d="M131.904 116.766c3.622-.44 7.132.67 10.673 1.229 1.869.295 3.74.515 5.632.597.38.017.761.026 1.142.034.036-.335.223-.643.63-.828.833-.377 1.5-.548 2.414-.511.838.033 1.678.119 2.502.27 1.498.274 3.002.898 4.097 1.98 2.534 2.505 2.149 6.53.19 9.258-4.046 5.638-11.431 5.9-17.756 5.826l-.584-.007c-5.759-.083-13.998.776-16.614-5.778a9.21 9.21 0 01.35-7.517c1.404-2.757 4.362-4.193 7.324-4.553zm17.99 9.388l-.052.002c-2.655.102-5.31.174-7.967.221.08.683.16 1.366.253 2.047.073.536.151 1.07.232 1.606.035.226.16.577.125.802l-.013.088a.81.81 0 01.353.306c.032.05.055.1.078.15 2.063.016 4.282-.024 6.385-.399l.004-.045a.871.871 0 01.298-.574c.148-.857.135-1.77.192-2.62.035-.528.074-1.056.111-1.584zm-10.048.26c-1.914.032-3.828.057-5.742.034l-.868-.014c.183.985.383 1.966.548 2.957.174 1.033-.735 1.69-1.522 1.663.089.015.177.03.265.042 2.457.348 5.01.255 7.503.253-.134-.784-.08-1.668-.1-2.322l-.004-.1a92.651 92.651 0 01-.08-2.513zm-13-.181c.067.512.196 1.013.39 1.48.816 1.97 2.69 2.89 4.67 3.277-.343-.119-.616-.404-.685-.893-.172-1.215-.234-2.45-.238-3.685-1.381-.013-2.772-.042-4.137-.18zm30.25-.42c-.984.231-2.126.125-3.091.169-.904.04-1.808.077-2.712.113.043.617.084 1.234.13 1.851.058.798.063 1.64.216 2.434 1.819-.621 3.448-1.617 4.671-3.21a6.17 6.17 0 00.785-1.358zm-25.607-5.814c-1.637.388-3.186 1.207-4.019 2.705-.494.89-.711 1.943-.67 2.982 1.384-.161 2.791-.222 4.192-.273.004-.252.01-.504.018-.756l.021-.644c.039-1.23.058-2.773.458-4.014zm8.471.15l-.72-.08c-2.001-.229-4.002-.468-6.003-.33-.29.02-.584.05-.878.094.353 1.277.324 2.777.471 4.04.057.49.13.974.21 1.457l.347-.016c2.147-.116 4.297-.188 6.446-.273 0-.404.002-.808.009-1.212l.008-.404c.024-1.032-.043-2.195.11-3.276zm10.05-.163c-2.096.338-4.262.41-6.321.413a27.52 27.52 0 01-2.466-.123c.054.438.081.88.122 1.312.08.872.174 1.743.274 2.612l.09.762c2.642-.12 5.283-.25 7.924-.384l.373-.02.105-1.463c.07-.975.149-1.95.26-2.921l-.083-.03a1.362 1.362 0 01-.278-.158zm.91.363c.116 1.379.18 2.764.265 4.145l1.741-.093.87-.049c1.129-.065 2.579-.407 3.694-.088.085-1.014-.205-2.002-1.12-2.684-1.606-1.197-3.652-.77-5.45-1.231zm-5.948-12.33c2.593-1.485 9.098-3.003 9.51 1.665.19 2.148-1.407 3.928-3.27 4.722l-.071.03c-1.748.718-4.847 1.53-6.36-.029-1.259-1.298.411-3.624 1.976-2.561.804.546 2.496.143 3.394-.116l.056-.017c.968-.285 2.259-1.196 1.859-2.388-.355-1.055-1.862-1.248-2.807-1.282-1.409-.05-2.78.276-4.177.383-.221.017-.29-.303-.11-.406zm10.74-7.505c3.519-.165 5.708 3.679 4.898 6.828-.14.544-.747 1.077-1.333 1.016l-.148-.014a1.305 1.305 0 01-.22-.035c-.557-.155-1.056-.734-1.016-1.335l.011-.175c.082-1.488-.079-3.202-1.846-3.562-1.5-.306-2.336 1.138-2.354 2.466-.003.236-.268.4-.477.274-1.083-.66-1.27-1.972-.857-3.102.525-1.432 1.837-2.29 3.342-2.36zm-26.113.825c2.56-.855 5.323.51 6.563 2.775.435.126.87.462.809.975-.087.739-.219 1.205-.73 1.765-.802.877-2.302.428-2.635-.65l-.014-.05c-.378-1.394-1.913-2.314-3.31-1.826-1.634.57-1.587 2.296-2.732 3.301a.395.395 0 01-.458.059c-1.216-.588-.998-2.359-.564-3.372.57-1.33 1.675-2.512 3.07-2.977zm-3.488-7.78c2.075-2.118 7.486-4.168 8.906-.256.27.745-.306 1.75-1.081 1.904-1.27.253-2.396-.299-3.658-.2-1.02.08-2.086.422-2.902 1.055-2.26 1.752-2.758 4.717-4.334 6.947-.076.109-.225.063-.24-.065-.358-3.247 1.036-7.065 3.309-9.385zm27.062-2.085c1.377-.486 2.937-.445 4.321-.013a8.394 8.394 0 013.66 2.34 9.32 9.32 0 011.194 1.606c.177.305.362.935.563 1.31 1.084.627 1.548 2.054.577 3.07l-.044.045-.13.128c-.522.517-1.309.741-2.022.535-1.594-.462-1.788-1.718-2.34-3.052a5.459 5.459 0 00-1.747-2.233c-1.79-1.352-4.725-1.783-6.88-1.146-.115.034-.25-.112-.168-.218.408-.53.644-.964 1.19-1.39a6.359 6.359 0 011.826-.982z"
          fill="#000"
        />
        <g fill="#000">
          <path d="M129.449 129.598c1.71-4.008 5.444-6.954 9.742-8.032 3.156-.789 6.469-.763 9.686-.45 1.686.163 3.494.296 5.083.922 1.357.535 2.462 1.547 3.293 2.734.99 1.407 1.663 3.017 2.136 4.667.067.235.13.471.189.709-.206 1.245-.642 2.305-1.795 3.087-1.125.765-2.467 1.078-3.805 1.189a5.984 5.984 0 01-.375-.195c-2.085-1.194-3.552-4.016-6.184-3.634-2.349.341-3.895 3.298-5.292 5.031-4.483.523-8.963-.825-12.611-3.39a7.441 7.441 0 01-.067-2.638m33.176-3.04a17.294 17.294 0 00-1.346-2.901 16.495 16.495 0 00-7.714-6.843c-7.631-3.268-17.505-.964-23.668 4.397-2.105 1.833-4.234 4.526-4.878 7.423a1.077 1.077 0 00-.523.279c-4.453-2.805-9.038-5.503-12.626-9.39-2.606-2.825-4.418-6.168-5.528-9.84-.09-.303-.578-.259-.563.076l.013.234c-.047-.144-.266-.07-.283.07-.597 4.462-1.344 9.193-.656 13.678.411 2.677 1.626 4.636 3.25 6.752 1.742 2.268 3.712 4.377 5.727 6.4 1.279 1.284 2.614 2.765 4.18 3.707 1.82 1.094 3.886 1.925 5.83 2.77a75.753 75.753 0 006.027 2.346c4.087 1.383 8.311 2.34 12.609 2.759 3.441.334 7.374.698 10.672-.597 2.527-.992 4.567-2.786 6.186-4.945 1.761-2.35 3.154-5.028 3.924-7.851.8-2.933-.464-8.052-.633-8.525" />
        </g>
        <g fill="#000">
          <path d="M170.723 102.353c-2.014 13.63-16.075 15.137-18.573 1.606.401-.175.69-.521.63-1.192-.015-2.95.9-6.066 3.56-7.706 2.747-1.692 5.963-1.86 9.142-1.817 6.068-.144 5.94 4.93 5.241 9.11m-20.774-5.929c-1.904-.08-4.314-.013-6.02 1.148-.469-1.263-1.687-2.612-2.919-3.334 4.577.134 9.288-.316 13.898-.666a8.779 8.779 0 00-2.797 3.19c-.62-.33-1.507-.299-2.162-.338m-8.394 7.373c-5.28 18.184-18.462 10.258-19.9 7.928-2.591-3.856-3.079-13.23-.82-15.737 3.231-2.266 7.807-1.683 11.625-1.739 7.014.095 11.996 2.194 9.095 9.548m35.403-8.363c-1.434-.188-2.967-.226-4.301.406-.411-1.746-1.7-3.206-3.156-3.849-.177-.22-.15-.34-.752-.306-3.696-1.112-7.832-.524-11.384.616-5.61.473-11.495.845-17.152 1.496-5.299-2.38-21.29-2.73-22.284 3.139-1.25-.188-3.379-1.172-4.43.163-7.704-1.306-15.666.51-23.405 1.319-1.947.358-2.95 4.226-.74 4.173 1.243-.338-.038-2.408 1.636-2.564 7.466-.816 14.77-1.973 22.312-2.109-.262 1.303 4.99 1.388 5.067.627.011.006.023.01.034.015-1.297 4.838-.126 11.8 2.219 14.8 3.286 3.928 11.535 5.055 15.192 2.528 4.718-2.333 9.627-14.042 8.248-17.932 2.502-.794 4.976-.556 7.573-.152-.594 1.68-1.62 5.816-.144 6.175-.271 8.21 7.198 13.334 14.085 9.966 5.96-2.8 8.044-11.659 7.315-17.036.742 1.434 6.971-.127 4.067-1.475" />
        </g>
      </g>
    </svg>
  );
}

export default SvgPeep1;
