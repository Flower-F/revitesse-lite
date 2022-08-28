function App() {
  return (
    <>
      <div h-full text-center display-flex select-none transition-all-400>
        <div m-auto>
          <div text-5xl font-thin animate-bounce-alt animate-count-infinite animate-duration-1s>unocss</div>
          <div op-30 text-lg font-light m-1>The instant on-demand Atomic CSS engine.</div>
          <div m-2 display-flex justify-center text-2xl op-30 hover-op-80>
            <a
              i-carbon-logo-github
              text-inherit
              href="https://github.com/unocss/unocss"
              target="_blank"
              rel="noreferrer"
            ></a>
          </div>
        </div>
      </div>
      <div position-absolute bottom-5 right-0 left-0 text-center op-30 font-light>
        on-demand · instant · fully customizable
      </div>
    </>
  )
}

export default App
