export default {
    apiListTable: {
        selected: [],
        search: '',
        headers: [
            { text: '번호',  
              align: 'start',
              sortable: true,
              value: 'apiKorNm' },
            { text: '제휴사코드', value: 'attributes.providerID' },
            { text: '제공기관', value: 'attributes.providerName' },
            { text: 'API한글명', value: 'attributes.apiKorNm' },
            { text: 'API명', value: 'attributes.apiNm' },
            { text: '버전', value: 'attributes.apiVersion' },
            { text: 'API설명', value: 'attributes.apiDetailDesc' },
            { text: '사용신청', value: '' }
        ]
    }
}
