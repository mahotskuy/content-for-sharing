import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import CircularProgress from '@mui/material/CircularProgress';
import './DownloadOfflineWidget.css';

import { useSelector, useDispatch } from 'react-redux'
import { setDialog } from '../../features/dialogs/dialogs-slice'
import * as constants from '../../app/constantas';

export default function DownloadOfflineWidget() {
    const dispatch = useDispatch();
    const isComponentLoading = useSelector((state) => state.settings.offlineLoading);
    const isVisibable = !useSelector((state) => state.settings.saveSiteData)?.value && !isComponentLoading;

    const handleClickOpen = () => {
        dispatch(setDialog({
            dialogName: constants.dialogs.OFFLINE_NOTIFICATION,
            show: true
        }));
    };

    return (
        <div>
            {isVisibable === true &&
                <IconButton
                    className='download-offline-widget fixed-icon'
                    component="span"
                    onClick={handleClickOpen}>
                    <DownloadForOfflineIcon
                        sx={{ fontSize: 40 }} />
                </IconButton>
            }
            {isComponentLoading && <CircularProgress className='download-offline-widget-loading fixed-icon'/>}
        </div>
    );
}
