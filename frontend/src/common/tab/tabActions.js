export function selectTab(tabId) {
    return {
        type: 'TAB_SELECTED',
        payload: tabId
    }
}

/* exemplo de chamada
    showTabs('tabList', 'tabCreate') 
*/

export function showTabs(...tabIds) {
    const tabsToShow = {}
    tabIds.forEach(e => tabsToShow[e] = true)
    return{
        type:'TAB_SHOW',
        payload: tabsToShow
    }
}