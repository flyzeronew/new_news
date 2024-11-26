export default function handler(req, res) {
    // const appUrl = process.env.APP_URL;
    const data = [ 
            {
                'title':'首頁',
                'url':'/',
            },
            {
                'title':'即時',
                'url':'/',
            },
            {
                'title':'生活',
                'url':'/',
            },
            {
                'title':'政治',
                'url':'/',
            },
            {
                'title':'娛樂',
                'url':'/',
            },
    ];
    res.status(200).json(data);
}