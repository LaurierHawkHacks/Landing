const departments = [
    {
        title: 'admin',
        members: [
            {
                name: 'Nausher Rao',
                title: 'President',
                profile: 'https://img.notionusercontent.com/s3/prod-files-secure%2Fce09554c-fc32-4d0a-88ed-8e7673cb8b39%2Faa7d00a9-24cb-401e-a47a-d9cad2c6a057%2FNaush.jpg/size/w=1510?exp=1726753482&sig=KN-RkgxTgYh-tVEUSn6XyJlbhYWLj_OBU44-bvaKl-4',
            },
            {
                name: 'Maximus Ghosh',
                title: 'VP of Admin & Finance',
                profile: 'https://img.notionusercontent.com/s3/prod-files-secure%2Fce09554c-fc32-4d0a-88ed-8e7673cb8b39%2F4fb2f044-a145-463b-9bfb-25833d78e5a8%2Fimage.jpeg/size/w=1510?exp=1726753597&sig=6IjzxD1Q8POTrIo_GhOLbuO8La0nGHqY4e4dA_qFD90',
            },
            {
                name: 'Torin Borton-McCallum',
                title: 'VP of Hackathon Strategy & Logistics Coordinator',
                profile: 'https://img.notionusercontent.com/s3/prod-files-secure%2Fce09554c-fc32-4d0a-88ed-8e7673cb8b39%2Fcf7b129a-b0b9-40a8-8c15-2ce28d0e41e9%2FIMG_5194.jpeg/size/w=1510?exp=1726753602&sig=6LCi9I8zsDPL1o_pkZa-PYazlDh58WEfbH9XZap9j-Y',
            },
            {
                name: 'Nishant Tewari',
                title: 'VP of Internal Affairs',
                profile: 'https://img.notionusercontent.com/s3/prod-files-secure%2Fce09554c-fc32-4d0a-88ed-8e7673cb8b39%2Fc2a8d135-dcdd-40a7-89d8-7cf356e17643%2FNish.jpg/size/w=1510?exp=1726753606&sig=4BO_e18tbIZparlWJBAmWENXcpMztvbZd-6Vs-ccqWg',
            },
        ],
    },
    {
        title: 'design operations',
        members: [
            {
                name: 'Jacqueline Truong',
                title: 'VP of Design Operations',
                profile: 'https://img.notionusercontent.com/s3/prod-files-secure%2Fce09554c-fc32-4d0a-88ed-8e7673cb8b39%2F75093fd5-2bba-4fe6-a777-c6ad625ffb4c%2Fjackie.jpg/size/w=1510?exp=1726753611&sig=KHqN6n2h4Q0AzW0hajZauFFv125uwZBbQQMCcC2dpnY',
            },
            {
                name: 'Tracy Ou',
                title: 'VP of Design Operations',
                profile: 'https://img.notionusercontent.com/s3/prod-files-secure%2Fce09554c-fc32-4d0a-88ed-8e7673cb8b39%2F96960e69-3591-4277-a6f3-e04d60e8099b%2FIMG_7208.jpeg/size/w=1510?exp=1726753615&sig=i91v8UJdIAEYBwK_yHp0YPJg7igenNJgKu6wtlkZhfw',
            },
            {
                name: 'Vandan Thacker',
                title: 'UI Designer',
                profile: 'https://img.notionusercontent.com/s3/prod-files-secure%2Fce09554c-fc32-4d0a-88ed-8e7673cb8b39%2F7e4717ab-53a4-4ec5-9670-f5cf804536c1%2Fvandan.jpg/size/w=1510?exp=1726753619&sig=euceU6vEJWEodqXyE88L46arLrtvbXIfGo0OeY5O6Tk',
            },
            {
                name: 'Naomi Aiyevbekpeny',
                title: 'Graphic Designer',
                profile: 'https://img.notionusercontent.com/s3/prod-files-secure%2Fce09554c-fc32-4d0a-88ed-8e7673cb8b39%2F912d36f9-ccaf-4eca-9285-48b8e2e7dd58%2FIMG_20240209_182942_772.jpg/size/w=1510?exp=1726753624&sig=Br9pMVhSjmoOhmhGyhTUocp7mBv4j7cu4JY0mIlJ-XQ',
            },
        ],
    },
    {
        title: 'engineering',
        members: [
            {
                name: 'Aidan Traboulay',
                title: 'VP of Engineering',
                profile: 'https://img.notionusercontent.com/s3/prod-files-secure%2Fce09554c-fc32-4d0a-88ed-8e7673cb8b39%2Ffb87abdd-94df-4186-b732-f8900f75e0f3%2FAidan.png/size/w=1510?exp=1726753628&sig=Drm7zLQnrO-dEBQVDuRvNBw9CpwWbz6Na8ekNJsLI88',
            },
            {
                name: 'Juan Wu',
                title: 'VP of Engineering',
                profile: 'https://img.notionusercontent.com/s3/prod-files-secure%2Fce09554c-fc32-4d0a-88ed-8e7673cb8b39%2F718ca44f-2211-491b-9048-dd6a5de7de87%2Fmmexport1668302474533__01(1).jpg/size/w=1510?exp=1726753634&sig=3gZxzk_62prbvJNAE6NbuwF46YTY25EXBKcIB5DY5m4',
            },
            {
                name: 'Abdul Basit',
                title: 'Software Engineer',
                profile: 'https://img.notionusercontent.com/s3/prod-files-secure%2Fce09554c-fc32-4d0a-88ed-8e7673cb8b39%2F4dcee704-4744-4e0d-81a0-7caaba08dcbb%2FIMG_6814.jpeg/size/w=1510?exp=1726753638&sig=Uq7yUBJq7qr1G3D8ogzk3zK-TEnIDPfbHMEzcV7wHUI',
            },
            {
                name: 'Amir Agassi',
                title: 'Software Engineer',
                profile: 'https://img.notionusercontent.com/s3/prod-files-secure%2Fce09554c-fc32-4d0a-88ed-8e7673cb8b39%2F733bfeb9-abe4-43b6-9c93-0982b25ee454%2F04e2760ba3b0d56cf5b4abab1633de3d-transformed.png/size/w=1510?exp=1726753815&sig=1zk83PPljdHmgTmTltquCR5bmRYoAt-ezyuRCSurH6k',
            },
            {
                name: 'Chee Kian Teoh',
                title: 'Software Engineer',
                profile: 'https://img.notionusercontent.com/s3/prod-files-secure%2Fce09554c-fc32-4d0a-88ed-8e7673cb8b39%2F95ed3d8b-369f-4510-8339-268615e32b0f%2Fjustasgood.jpg/size/w=1510?exp=1726753819&sig=1osAjvoPtqxqijGd3SLCQ_9U_vv-lO-UtL_anfzg-RY',
            },
            {
                name: 'Gabriel Diniz',
                title: 'Software Engineer',
                profile: 'https://img.notionusercontent.com/s3/prod-files-secure%2Fce09554c-fc32-4d0a-88ed-8e7673cb8b39%2Fff48a9a6-c8da-4297-9a14-3d5c27f322a4%2FHeadshot2.jpg/size/w=1510?exp=1726753827&sig=-cAq_P30t3oSRsMVlSTUizT9dNXPD576-PvvtmavOto',
            },
            {
                name: 'Kevin Vu',
                title: 'Software Engineer',
                profile: 'https://img.notionusercontent.com/s3/prod-files-secure%2Fce09554c-fc32-4d0a-88ed-8e7673cb8b39%2Fa094cee9-1730-4d2b-82ef-4a8d2025901b%2FIMG_3517.jpeg/size/w=1510?exp=1726753832&sig=NUVcsY-VGwQFFmeUBpWOg2NVb23diok7ubCWnNZZMyc',
            },
            {
                name: 'Nora Chamseddin',
                title: 'Software Engineer',
                profile: 'https://img.notionusercontent.com/s3/prod-files-secure%2Fce09554c-fc32-4d0a-88ed-8e7673cb8b39%2F7873d337-ca4f-4863-8a75-4f9dc208b531%2Fnora.jpeg/size/w=1510?exp=1726753840&sig=RMYcAnI840jZ9zVvqnT-Dox58I-ZDwN6aHiN-6XAOtw',
            },
        ],
    },
    {
        title: 'logistics & operations',
        members: [
            {
                name: 'Dhar Patel',
                title: 'VP of Logistics & Operations',
                profile: 'https://img.notionusercontent.com/s3/prod-files-secure%2Fce09554c-fc32-4d0a-88ed-8e7673cb8b39%2Fdd9017f4-7c7f-43f9-8d74-a3318e5d76fa%2FIMG_1444.jpg/size/w=1510?exp=1726753849&sig=v3IjSLUbfqeOSL-urmpCwueUwcox-0X5klEjFRiMTLE',
            },
            {
                name: 'Shakib Ahmed',
                title: 'VP of Logistics & Operations',
                profile: 'https://img.notionusercontent.com/s3/prod-files-secure%2Fce09554c-fc32-4d0a-88ed-8e7673cb8b39%2F64021f5c-a563-4b27-a945-38d8d2f38edc%2FIMG_2365.jpeg/size/w=1510?exp=1726754541&sig=vGHNO86E0nLGA1KzigcA3XLdOEA9HHsWtv5bYCReWcY',
            },
            {
                name: 'Connor Lilbourne',
                title: 'Logistics Coordinator',
                profile: 'https://img.notionusercontent.com/s3/prod-files-secure%2Fce09554c-fc32-4d0a-88ed-8e7673cb8b39%2Fa5ba74f2-bb53-4770-91e0-970a156aa51a%2Fme.jpg/size/w=1510?exp=1726754547&sig=kTpBDkBIfoHynu0OwHKVZrmJyUktqT5UgTiURB14rP4',
            },
            {
                name: 'Itohan Odigie',
                title: 'Logistics Coordinator',
                profile: 'https://img.notionusercontent.com/s3/prod-files-secure%2Fce09554c-fc32-4d0a-88ed-8e7673cb8b39%2Ff0ec3038-05a6-412b-86ea-5260e3fc3d21%2F2FF56F24-8453-43AA-840E-EBDD0ABFCFD5.jpeg/size/w=1510?exp=1726754551&sig=koxNxvwMMNsr9EoHppo7HZjW7GdzW2SOsOIaoVLGX5A',
            },
            {
                name: 'Jonathan Pilarski',
                title: 'Logistics Coordinator',
                profile: 'https://img.notionusercontent.com/s3/prod-files-secure%2Fce09554c-fc32-4d0a-88ed-8e7673cb8b39%2Fd4f568a5-afe0-4f71-ae0d-8cce74de8f0a%2Fjp.jpg/size/w=1510?exp=1726754556&sig=7ZFdDxWP-bC5BhByozMegwr-iv0VVtkzhpE4AaKdRnA',
            },
            {
                name: 'Maanay Shaikh',
                title: 'Logistics Coordinator',
                profile: 'https://img.notionusercontent.com/s3/prod-files-secure%2Fce09554c-fc32-4d0a-88ed-8e7673cb8b39%2Fce2c8c06-20f0-4668-9e85-b30a8ba4cefc%2FLinkedIn_profile_pic.jpeg/size/w=1510?exp=1726754567&sig=ZnE6T00tRntFyl9_-GkzlpOFXyoY8UU5nPFsq3kEewc',
            },
            {
                name: 'Melissa Pinto',
                title: 'Logistics Coordinator',
                profile: 'https://img.notionusercontent.com/s3/prod-files-secure%2Fce09554c-fc32-4d0a-88ed-8e7673cb8b39%2F815608c2-38be-416d-949e-6a559da087f3%2FD367DA45-98BF-40D3-992D-A9C1CEC8F91B.jpeg/size/w=1510?exp=1726754572&sig=_XzYPEXUEF7wY7Ewc-n0jvtZg1ODOuwJlbsMDSe3Wm8',
            },
            {
                name: 'Mila Cvetanovska',
                title: 'Logistics Coordinator',
                profile: 'https://img.notionusercontent.com/s3/prod-files-secure%2Fce09554c-fc32-4d0a-88ed-8e7673cb8b39%2F3bea1de6-acea-4f15-ac76-54589e1a7250%2FMila.jpg/size/w=1510?exp=1726754576&sig=YzoaJvUdq8nE2jyLagJ93j5QxlpnVtmyEjcTwIlu7F8',
            },
            {
                name: 'Vincenzo Milano',
                title: 'Logistics Coordinator',
                profile: 'https://img.notionusercontent.com/s3/prod-files-secure%2Fce09554c-fc32-4d0a-88ed-8e7673cb8b39%2F6af6cb5f-5133-4b80-b5e4-d897ab19f30d%2F1664742292350.jpg/size/w=1510?exp=1726754605&sig=wrQUEc2Gyma1516CZzh0tD-R4upLd2-15mjdGO74WGY',
            },
            {
                name: 'Syed Rafae Hashmi',
                title: 'Logistics Coordinator',
                profile: 'https://img.notionusercontent.com/s3/prod-files-secure%2Fce09554c-fc32-4d0a-88ed-8e7673cb8b39%2F15edd4d1-4544-4b8f-a621-ac1273eaf3a4%2FIMG_3363.jpg/size/w=1510?exp=1726754616&sig=si-cTeKikOj_YRzu_Ch6FC8hL8wYjjl9P9DXq5FQYSM',
            },
        ],
    },
    {
        title: 'corporate relations & sponsorships',
        members: [
            {
                name: 'Arnav Chauhan',
                title: 'VP of Corporate Relations & Sponsorships',
                profile: 'https://img.notionusercontent.com/s3/prod-files-secure%2Fce09554c-fc32-4d0a-88ed-8e7673cb8b39%2F9e3abad2-8542-4fc0-8951-efb3fa416840%2FHeadshot_Arnav.jpg/size/w=1510?exp=1726754622&sig=gTDNg0ToJwgJxLTpMiSHShRmQ3abRCcxlrDf6DRl2Xo',
            },
            {
                name: 'Rafid Karim',
                title: 'Sponsorship Coordinator',
                profile: 'https://img.notionusercontent.com/s3/prod-files-secure%2Fce09554c-fc32-4d0a-88ed-8e7673cb8b39%2Fdd201399-0a8c-4ba7-9956-abde9f19a653%2F3K5A1776_(1).jpg/size/w=1510?exp=1726754865&sig=o9M93-xiKyrIvyW1Rz8pR6lP9Z7NZV15-eFCmZa8cRE',
            },
            {
                name: 'James Chun',
                title: 'Sponsorship Coordinator',
                profile: 'https://img.notionusercontent.com/s3/prod-files-secure%2Fce09554c-fc32-4d0a-88ed-8e7673cb8b39%2Fb488a484-bad3-4abb-a37a-5a8766e66b82%2Fjames.jpg/size/w=1510?exp=1726754871&sig=CNhE01g8K2c517GNmkRzY8xhx1YM8rxyfyEq0drSofg',
            },
            {
                name: 'Sami Naqvi',
                title: 'Sponsorship Coordinator',
                profile: 'https://img.notionusercontent.com/s3/prod-files-secure%2Fce09554c-fc32-4d0a-88ed-8e7673cb8b39%2Fc121e88f-bceb-4909-9299-694915b8248c%2FIMG_5954.jpg/size/w=1510?exp=1726754886&sig=UcThb4Oz2-qwhyPVvDuZt_g8LQPvpDCLtjJXBA3W4yU',
            },
        ],
    },
    {
        title: 'marketing & media',
        members: [
            {
                name: 'Jenali Shenela',
                title: 'VP of Marketing & Media',
                profile: 'https://img.notionusercontent.com/s3/prod-files-secure%2Fce09554c-fc32-4d0a-88ed-8e7673cb8b39%2Ffaca6770-be5f-472e-901c-956a69d2b892%2FPhoto_02-09-2023-23-18-30.heic/size/w=1510?exp=1726754892&sig=2_xZ1xwobSf4n1_Bo_FIAidaLou_oB_qsUbtkxJoD2Y',
            },
            {
                name: 'Mina Mansour',
                title: 'Social Media Coordinator',
                profile: 'https://img.notionusercontent.com/s3/prod-files-secure%2Fce09554c-fc32-4d0a-88ed-8e7673cb8b39%2F45914669-fc69-41bf-ad87-f789ae5f98a1%2FIMG_3140.png/size/w=1510?exp=1726754906&sig=jhxsbqHXF6V_58JzCotE8nUIp6JAGaSMChQ1SS8Qs6U',
            },
            {
                name: 'Samriddhi Makasare',
                title: 'Social Media Coordinator',
                profile: 'https://img.notionusercontent.com/s3/prod-files-secure%2Fce09554c-fc32-4d0a-88ed-8e7673cb8b39%2F20098672-86ce-4d57-9e18-20d071ea5f39%2F1692723102118.jpeg/size/w=1510?exp=1726754911&sig=XsY7mNJ9FWRPjVU2mOp8ovmzBCry847lSlSgO8KqI3E',
            },
            {
                name: 'Yousef Hozayen',
                title: 'Content Creator',
                profile: 'https://img.notionusercontent.com/s3/prod-files-secure%2Fce09554c-fc32-4d0a-88ed-8e7673cb8b39%2F36549363-74d9-4dda-b347-321e651f630d%2FIMG_3828.jpg/size/w=1510?exp=1726754915&sig=SzzJ3U7E7aONDwADiJTBiMTLZlvF-zO5B8FOgXTuXLg',
            },
            {
                name: 'Aren Melkon',
                title: 'Content Creator',
                profile: 'https://img.notionusercontent.com/s3/prod-files-secure%2Fce09554c-fc32-4d0a-88ed-8e7673cb8b39%2F08c013b8-eea5-45a3-879e-fff477728187%2Fimage_2024-02-09_191242946.png/size/w=1510?exp=1726754921&sig=Rbf-uLv4ztWagemDtiqKAXbDRSc2HeZx0vsilvvzTAg',
            },
        ],
    },
    {
        title: 'judges',
        members: [
            {
                name: 'Dhaval Shirvi',
                title: 'QA Specialist',
                company: 'SOTI',
                profile: 'https://img.notionusercontent.com/s3/prod-files-secure%2Fce09554c-fc32-4d0a-88ed-8e7673cb8b39%2F006c5d6a-0712-4f63-bf19-05878a057a95%2FFullSizeRender.jpeg/size/w=1510?exp=1726840714&sig=IWJ5OSqwbKb4DAWGWgbg2RQcZWzo0PsCF3C9ctm7mcs',
            },
            {
                name: 'Sarvesh Patil',
                title: 'Software Analyst',
                company: 'Enova Power Corp.',
                profile: 'https://img.notionusercontent.com/s3/prod-files-secure%2Fce09554c-fc32-4d0a-88ed-8e7673cb8b39%2Fa0025872-ebb7-48fb-b9b9-e2bcc0701b64%2F1695256209554.jpeg/size/w=1510?exp=1726840722&sig=LsN3ULf69k4bL8Y1G-jvq_Ci22-od7omAek1zYof4dc',
            },
            {
                name: 'Javal Lotia',
                title: 'Software Analyst',
                company: 'Enova Power Corp.',
                profile: 'https://img.notionusercontent.com/s3/prod-files-secure%2Fce09554c-fc32-4d0a-88ed-8e7673cb8b39%2F9a604a84-0431-4818-816a-81edbfa2d070%2FIMG_2295.jpeg/size/w=1510?exp=1726840727&sig=Cvs6caepnWpukeedpCWjUdYolLD5bTra_HiP3YCZDTU',
            },
            {
                name: 'Aman Garg',
                title: 'Software Developer',
                company: 'Nokia',
                profile: 'https://img.notionusercontent.com/s3/prod-files-secure%2Fce09554c-fc32-4d0a-88ed-8e7673cb8b39%2Fd885bf81-40d4-4e5b-a7ca-14c85f441815%2F1551984474355.jpeg/size/w=1510?exp=1726840737&sig=m3ITMm80rmGggNH4jkBUSiY68Fud8twsmwULIToXwHw',
            },
            {
                name: 'Harry Vijayaretnam',
                title: 'Software Developer',
                company: 'CoreLogic',
                profile: 'https://img.notionusercontent.com/s3/prod-files-secure%2Fce09554c-fc32-4d0a-88ed-8e7673cb8b39%2Fb5b3689d-a6b7-4cb9-9ad3-387f4b6e0512%2FIMG_8944.jpeg/size/w=1510?exp=1726840742&sig=iD6z4fi6QSLnSW85sJ5YQHgZ_v5wqsFiw-damn1fOT4',
            },
            {
                name: 'Faham Khan',
                title: 'Software Engineer II',
                company: 'Twitter / X',
                profile: 'https://img.notionusercontent.com/s3/prod-files-secure%2Fce09554c-fc32-4d0a-88ed-8e7673cb8b39%2F22b0bf0d-3c81-485b-9fb5-671c364dd251%2F5674EA98-6B79-4612-B669-78AEF2CBE501.jpeg/size/w=1510?exp=1726840746&sig=H_LRNNee-o3luf9liEbl9HKLhZZrMplggBEobBaAH9s',
            },
            {
                name: 'Ather Qureshi',
                title: 'Software Engineer',
                company: 'Carta',
                profile: 'https://img.notionusercontent.com/s3/prod-files-secure%2Fce09554c-fc32-4d0a-88ed-8e7673cb8b39%2F835b5e03-62c8-43ca-9be8-7b9cc49d35d2%2Fimage.png/size/w=1510?exp=1726840750&sig=BWAS96rURvpSHRQVAi6LQqlbSrlZzak-eM6wvUhJ66k',
            },
            {
                name: 'Stephanie Pitman',
                title: 'Software Developer',
                company: 'D2L',
                profile: 'https://media.licdn.com/dms/image/v2/C4D03AQF0iN9moTqYlg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1559067465973?e=1732147200&v=beta&t=UZ_b9Utwosp2AIc4TDBsjY5lgRlGknzLCybJGQ1YERU',
            },
            {
                name: 'Mark Ross',
                title: 'CEO',
                company: 'SEH Computer Systems Inc.',
                profile: 'https://img.notionusercontent.com/s3/prod-files-secure%2Fce09554c-fc32-4d0a-88ed-8e7673cb8b39%2F7439a324-e4a8-498c-b314-35bc6f4a8948%2Fmark.jpeg/size/w=1510?exp=1726840757&sig=h6NV3ESrnj5l1kvrOoPCJ4_fQLl2A28vwaVbVScoaEw',
            },
            {
                name: 'Rajat Malhotra',
                title: 'Software Engineer',
                company: 'Sun Life Financial',
                profile: 'https://img.notionusercontent.com/s3/prod-files-secure%2Fce09554c-fc32-4d0a-88ed-8e7673cb8b39%2Fa5dfef82-27f6-49a3-8625-0bcbc5e8d11f%2F160837BA-5CB8-417D-A514-BE2628409909.jpg/size/w=1510?exp=1726840762&sig=MziN9kwKQnD5YJaZ9gpo3ejWpEiL27WLOttJoWDO-IE',
            },
            {
                name: 'Sooraj Modi',
                title: 'Software Engineer',
                company: 'Unity',
                profile: 'https://img.notionusercontent.com/s3/prod-files-secure%2Fce09554c-fc32-4d0a-88ed-8e7673cb8b39%2Fbb75340e-86f4-4a28-9c3c-e59773abed33%2Fsooraj.jpg/size/w=1510?exp=1726840773&sig=9KLFXep17EuBaoJtd1kso5B12EAOfWZ4Udr9qCHVMk0',
            },
            {
                name: 'Kirti Dhir',
                title: 'Data Scientist',
                company: 'Rakuten Kobo Inc.',
                profile: 'https://img.notionusercontent.com/s3/prod-files-secure%2Fce09554c-fc32-4d0a-88ed-8e7673cb8b39%2Ffeef2667-eb1e-48ae-8e09-0f6d1dd7fbed%2Fkirti_photo.png/size/w=1510?exp=1726840777&sig=pL_kmghvjFSdF5uTvp2e8HWaBOad2qDeEffMjKInVxQ',
            },
            {
                name: 'Wil McReynolds',
                title: 'CVO',
                company: 'KP9 Interactive',
                profile: 'https://img.notionusercontent.com/s3/prod-files-secure%2Fce09554c-fc32-4d0a-88ed-8e7673cb8b39%2Fee667d8b-4cff-408a-a004-5921b2ea9109%2FUntitled.png/size/w=1510?exp=1726840782&sig=VdApy5yX1mxVERrrblRewJn757nLVKrnOpR-mym-gCY',
            },
        ]
    }
];

export { departments };