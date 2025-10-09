import { solana, solanaTestnet, solanaDevnet } from '@reown/appkit/networks'
import { SolanaAdapter } from '@reown/appkit-adapter-solana/react'

export const projectId = "162f061fcc08eee3ed1840ff1717d8ef"

export const metadata = {
  name: 'Orynth',
  description: 'Built with Orynth',
  url: 'https://orynth.dev',
  icons: ['https://avatars.githubusercontent.com/u/179229932']
}

export const networks = [solana, solanaTestnet, solanaDevnet]
export const solanaWeb3JsAdapter = new SolanaAdapter()