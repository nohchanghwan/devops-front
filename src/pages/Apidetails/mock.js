export default {
    apiSpecTable: {
        headers: [
            
            { text: '번호',  
              align: 'start',
              sortable: false,
              value: 'column3',
              divider: true, 
            },
            { text: '항목명', value: 'column4', sortable: false, divider: true},
            { text: '항목명(영문변수)', value: 'column5', sortable: false, divider: true },
            { text: 'Size', value: 'column6', sortable: false, divider: true },
            { text: '필수여부', value: 'column7', sortable: false, divider: true },
            { text: '항목설명', value: 'column8', sortable: false, divider: true },
            { text: '샘플데이터', value: 'column9', sortable: false, divider: true },
        ],
        reaquestParameter: [
            {
                column3: '1',
                column4: '서비스키',
                column5: 'ServiceKey',
                column6: '4',
                column7: 'Y',
                column8: '사용신청시 제공받은 인증키',
                column9: '-'
            },
            {
                column3: '2',
                column4: '페이지번호',
                column5: 'PageNo',
                column6: '5',
                column7: 'Y',
                column8: '페이지번호',
                column9: '1'
            },
            {
                column3: '3',
                column4: '한페이지결과수',
                column5: 'numOfRows',
                column6: '4',
                column7: 'Y',
                column8: '한페이지 결과수(최소20, 최대 9999)',
                column9: '10'
            },
            {
                column3: '4',
                column4: '지역구분코드',
                column5: 'Zcode',
                column6: '2',
                column7: 'N',
                column8: '시도코드(행정구역코드 앞 2자리)',
                column9: '11'
            },
        ],
        responseParameter: [
            {
                column3: '1',
                column4: '결과코드',
                column5: 'resultCode',
                column6: '4',
                column7: 'Y',
                column8: '결과코드(정상:0000)',
                column9: '0000'
            },
            {
                column3: '2',
                column4: '결과메세지',
                column5: 'resultMsg',
                column6: '50',
                column7: 'Y',
                column8: '결과메세지',
                column9: 'OK'
            },
            {
                column3: '3',
                column4: '전체결과수',
                column5: 'totalCount',
                column6: '9',
                column7: 'Y',
                column8: '전체결과수',
                column9: '36000'
            },
            {
                column3: '4',
                column4: '페이지번호',
                column5: 'pageNo',
                column6: '100',
                column7: 'Y',
                column8: '조회페이지',
                column9: '2'
            },
        ],
    },
    menu: [
        'Edit',
        'Copy',
        'Delete',
        'Print'
    ]
}
