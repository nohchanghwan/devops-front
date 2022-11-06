export default {
    employeeTable: {
        selected: [],
        search: '',
        headers: [
            { text: '제휴사코드',  
              align: 'start',
              sortable: true,
              value: 'column3' },
            { text: '제공기관', value: 'column4' },
            { text: 'API한글명', value: 'column5' },
            { text: 'API명', value: 'column6' },
            { text: 'API설명', value: 'column7' },
            { text: '신규년월일', value: 'column8' },
            { text: '최종수정일', value: 'column9' },
        ],
        employee: [
            {
                column3: 'A001',
                column4: '한국환경공단',
                column5: '전기자동차충전소목록',
                column6: '/chargeList',
                column7: '전기자동차 사용자를 위한 전국 공공 및 민간충전기 운영현황 실시간 제공',
                column8: '22/01/02',
                column9: '22/03/14'
            },
            {
                column3: 'A002',
                column4: '한국환경공단',
                column5: '전기자동차충전소목록',
                column6: '/chargeList',
                column7: '전기자동차 사용자를 위한 전국 공공 및 민간충전기 운영현황 실시간 제공',
                column8: '22/01/02',
                column9: '22/03/14'
            },
            {
                column3: 'A003',
                column4: '한국환경공단',
                column5: '전기자동차충전소목록',
                column6: '/chargeList',
                column7: '전기자동차 사용자를 위한 전국 공공 및 민간충전기 운영현황 실시간 제공',
                column8: '22/01/02',
                column9: '22/03/14'
            },
            {
                column3: 'A004',
                column4: '한국환경공단',
                column5: '전기자동차충전소목록',
                column6: '/chargeList',
                column7: '전기자동차 사용자를 위한 전국 공공 및 민간충전기 운영현황 실시간 제공',
                column8: '22/01/02',
                column9: '22/03/14'
            },
            {
                column3: 'A005',
                column4: '한국환경공단',
                column5: '전기자동차충전소목록',
                column6: '/chargeList',
                column7: '전기자동차 사용자를 위한 전국 공공 및 민간충전기 운영현황 실시간 제공',
                column8: '22/01/02',
                column9: '22/03/14'
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
