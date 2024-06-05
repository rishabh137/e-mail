import { Drawer } from '@mui/material'
import SideBarContent from './SIdeBarContent'

const SideBar = ({ openDrawer }) => {
    return (
        <Drawer
            anchor='left'
            open={openDrawer}
            hideBackdrop={true}
            ModalProps={{
                keepMounted: true
            }}
            variant='persistent'
            sx={{       // to give the css to the Drawer component to start below header component
                '& .MuiDrawer-paper': {
                    marginTop: '67px',
                    width: 250,
                    background: '#F5F5F5',
                    borderRight: 'none',
                    height: 'calc(100vh - 67px)'
                }
            }}
        >
            <SideBarContent />
        </Drawer>
    )
}

export default SideBar