import { useAppKitAccount } from '@reown/appkit/react'

export function WalletOperations() {
  const { isConnected, address } = useAppKitAccount()
  
  if (!isConnected) {
    return null
  }

  return (
    <div className="p-4 border rounded-lg">
      <p className="text-sm">Connected: {address?.slice(0, 6)}...{address?.slice(-4)}</p>
    </div>
  )
}