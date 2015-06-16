$(function() {

    Morris.Area({
        element: 'morris-area-chart',
        data: [{
            period: '2010 Q1',
            Orders: 2666,
            Transactions: null,
            FlexBilling: 2647
        }, {
            period: '2010 Q2',
            Orders: 2778,
            Transactions: 2294,
            FlexBilling: 2441
        }, {
            period: '2010 Q3',
            Orders: 4912,
            Transactions: 1969,
            FlexBilling: 2501
        }, {
            period: '2010 Q4',
            Orders: 3767,
            Transactions: 3597,
            FlexBilling: 5689
        }, {
            period: '2011 Q1',
            Orders: 6810,
            Transactions: 1914,
            FlexBilling: 2293
        }, {
            period: '2011 Q2',
            Orders: 5670,
            Transactions: 4293,
            FlexBilling: 1881
        }, {
            period: '2011 Q3',
            Orders: 4820,
            Transactions: 3795,
            FlexBilling: 1588
        }, {
            period: '2011 Q4',
            Orders: 15073,
            Transactions: 5967,
            FlexBilling: 5175
        }, {
            period: '2012 Q1',
            Orders: 10687,
            Transactions: 4460,
            FlexBilling: 2028
        }, {
            period: '2012 Q2',
            Orders: 8432,
            Transactions: 5713,
            FlexBilling: 1791
        }],
        xkey: 'period',
        ykeys: ['Orders', 'Transactions', 'FlexBilling'],
        labels: ['Orders', 'Transactions', 'Flex Billing'],
        pointSize: 2,
        hideHover: 'auto',
        resize: true
    });

    Morris.Bar({
        element: 'morris-bar-chart',
        data: [{
            y: 'July 1',
            a: 100
        }, {
            y: 'July 2',
            a: 75
        }, {
            y: 'July 3',
            a: 50
        }, {
            y: 'July 4',
            a: 75
        }, {
            y: 'July 5',
            a: 50
        }, {
            y: 'July 6',
            a: 75
        }, {
            y: 'July 7',
            a: 100
        }],
        xkey: 'y',
        ykeys: ['a'],
        labels: ['Orders'],
        hideHover: 'auto',
        resize: true
    });

});
