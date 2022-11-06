export default {
    Reqcontentsstatus: {
        selected: [],
        search: '',
        headers: [
            { text: '번호',  
              align: 'start',
              sortable: true,
              value: '' },
            { text: '사용자명', value: 'attributes.username' },
            { text: 'email', value: 'attributes.email' },
            { text: '제공기관', value: 'attributes.providerName' },
            { text: '신청년월일', value: 'attributes.createdAt' },
            { text: '사용종료년월일', value: 'attributes.endYMD' },
            { text: '사용상태', value: 'endOrNot' },
            { text: ''}
               
        ]
    }
}
