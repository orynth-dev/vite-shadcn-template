import { createAppKit } from '@reown/appkit/react'
import { solana, solanaTestnet, solanaDevnet } from '@reown/appkit/networks'
import { metadata, projectId, solanaWeb3JsAdapter } from './config/wallet'
import { WalletOperations } from './components/wallet/WalletOperations'
import './App.css'

createAppKit({
  projectId,
  metadata,
  themeMode: 'light',
  networks: [solana, solanaTestnet, solanaDevnet],
  adapters: [solanaWeb3JsAdapter],
  features: { analytics: true }
})

function App() {
  return (
    <div className="p-8">
      <div className="max-w-md mx-auto space-y-4">
        <h1 className="text-2xl font-bold text-center">Built with Orynth</h1>
        <appkit-button />
        <WalletOperations />
      </div>
    </div>
  )
}

export default App
