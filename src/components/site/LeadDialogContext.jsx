import { createContext, useCallback, useContext, useMemo, useState } from "react"
import LeadFormDialog from "./LeadFormDialog"

const LeadDialogContext = createContext({ openLeadDialog: () => {} })

export const LeadDialogProvider = ({ children }) => {
  const [open, setOpen] = useState(false)
  const openLeadDialog = useCallback(() => setOpen(true), [])
  const value = useMemo(() => ({ openLeadDialog, isOpen: open }), [openLeadDialog, open])

  return (
    <LeadDialogContext.Provider value={value}>
      {children}
      <LeadFormDialog open={open} onOpenChange={setOpen} />
    </LeadDialogContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useLeadDialog = () => useContext(LeadDialogContext)
