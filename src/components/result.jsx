import './result.css'

const Results = ({ data }) => {
    const { recipient, interests, price } = data;

    const allProducts = [
        { name: 'Портативная аудиосистема Smartbuy BLOOM 3', price: 699, interests: ['Музыка'], image: 'https://c.dns-shop.ru/thumb/st1/fit/500/500/94463aaf84aad19f90373db8243f7d5e/7c345d13e10a6681dafe0136f166f6712b6c8b5d73980f4a9a0982f8a7409690.jpg.webp'},
        { name: 'Портативная аудиосистема Soundmax SM-PS5035B', price: 750, interests: ['Музыка'], image: 'https://c.dns-shop.ru/thumb/st1/fit/500/500/b79b6079c0a98a6bd4488c271cce48c0/080c2536a828b144a8c796f6dd63477c01b1c3001d23992765098428dd395b78.jpg.webp' },
        { name: 'Портативная аудиосистема Soundmax SM-PS5022B', price: 1599, interests: ['Музыка'], image: 'https://c.dns-shop.ru/thumb/st1/fit/500/500/4358d63edc56d43513418a20631a1881/492512dcae8cf1425cfede24a5087330eebbf19e780adc62dce95870fc51ec0c.jpg.webp' },
        { name: 'Портативная аудиосистема Soundmax SM-PS4427', price: 1999, interests: ['Музыка'], image: 'https://c.dns-shop.ru/thumb/st1/fit/500/500/d7dff6295aea9b8ab1246d6d683bc5c2/4bc785fa77470711a56747a76e93da87b2f49f3716593f33ee4440016f8e8f8a.jpg.webp' },
        { name: 'Портативная аудиосистема BQ PBS2002', price: 2299, interests: ['Музыка'], image: 'https://c.dns-shop.ru/thumb/st1/fit/500/500/177cf7bc3953d991597ac7d8c898cdaa/94dc9938e131b65ef76ed302fee57b1dbfb314663c42ccf6531d57ac31c2819f.jpg.webp' },
        { name: 'Портативная аудиосистема Denn DPS225', price: 7299, interests: ['Музыка'], image: 'https://c.dns-shop.ru/thumb/st4/fit/500/500/bd48add17a5f4c517f6ea35ece5cb2e8/b07f84a6127de7461d433607bca0b2ad1efd54a3c791b85a40976e007e1a4290.jpg.webp' },
        { name: 'Портативная аудиосистема Dialog Oscar AO-20', price: 7399, interests: ['Музыка'], image: 'https://c.dns-shop.ru/thumb/st1/fit/500/500/e5a9f8faf0f8415b85130bcfe2d5951b/bd7ec283e1d2196a2f6877ce9cd31a6a4b596bcc20f3e4645534fdb042176584.jpg.webp' },
        { name: 'Портативная аудиосистема Microlab PT600', price: 7599, interests: ['Музыка'], image: 'https://c.dns-shop.ru/thumb/st1/fit/500/500/171b3f56474121c83a7406ebea2dedb3/d8671712e02a067726cf2d4016741c7550ebb916db907f1138a86c07cc14f18c.jpg.webp' },
        { name: 'Портативная аудиосистема AIWA PAS-Y600', price: 7599, interests: ['Музыка'], image: 'https://c.dns-shop.ru/thumb/st4/fit/500/500/b2bf6879c2bb99745d78cd8b79be436b/e4f00dbe7d11f9df11550889bfc44a2cc04b5516f4826b773477a852e0a86036.jpg.webp' },
        { name: 'Портативная аудиосистема SVEN PS-655', price: 8099, interests: ['Музыка'], image: 'https://c.dns-shop.ru/thumb/st4/fit/500/500/cc6c3b35ce8754f907445406c9f1e55c/a1fb9a23e016964fdd46dc14f25a894216dbc8ac81a0b5cfe9797385d74911c2.jpg.webp' },
        { name: 'Портативная аудиосистема AIWA CAS-2021', price: 15299, interests: ['Музыка'], image: 'https://c.dns-shop.ru/thumb/st1/fit/500/500/048e43641b5b9fdcbef29e0f82bcdac5/af884a8ae62dff794918d45048af9b6aa16f3b4ff8e3a6850ec77ac64b7101b6.jpg.webp' },
        { name: 'Портативная аудиосистема Soundmax SM-MS4206', price: 15399, interests: ['Музыка'], image: 'https://c.dns-shop.ru/thumb/st1/fit/500/500/87c232cbecc89a1994ca9b11f6a70bdb/c0adc592b50dcc766f6dc34b1532a2ecbcc74da84eae879bfd05e113a85a6aa1.jpg.webp' },
        { name: 'Портативная аудиосистема Microlab PT802W', price: 16299, interests: ['Музыка'], image: 'https://c.dns-shop.ru/thumb/st1/fit/500/500/3bf01dfbee43ae0b9d6d07a56091b970/a45877320e945ff3f79b34c265f36c97fdf38e151a8b9303b30ea20328b2ba78.png.webp' },
        { name: 'Портативная аудиосистема GINZZU GM-203', price: 15399, interests: ['Музыка'], image: 'https://c.dns-shop.ru/thumb/st1/fit/500/500/4036ee87feac90fe85fadf7002c7c6fe/6225cb3f35637fb668c62e488568f1a892be76c8553d7581dbf09d8b190114c7.jpg.webp' },
        { name: 'Портативная аудиосистема AIWA CAS-500', price: 16899, interests: ['Музыка'], image: 'https://c.dns-shop.ru/thumb/st4/fit/500/500/571757215f09586613c4c8fcb354566e/dd3134a82a5da191002fca40aeabadd8699e304e8226cae8faac4731f1c2efff.jpg.webp' },
        // { name: 'Портативная аудиосистема Soundmax SM-PS5035B', price: 750, interests: ['Музыка'], image: '' },
        // { name: 'Портативная аудиосистема Soundmax SM-PS5035B', price: 750, interests: ['Музыка'], image: '' },
        // { name: 'Портативная аудиосистема Soundmax SM-PS5035B', price: 750, interests: ['Музыка'], image: '' },
        // { name: 'Портативная аудиосистема Soundmax SM-PS5035B', price: 750, interests: ['Музыка'], image: '' },
        // { name: 'Портативная аудиосистема Soundmax SM-PS5035B', price: 750, interests: ['Музыка'], image: '' },
        // { name: 'Портативная аудиосистема Soundmax SM-PS5035B', price: 750, interests: ['Музыка'], image: '' },
        // { name: 'Портативная аудиосистема Soundmax SM-PS5035B', price: 750, interests: ['Музыка'], image: '' },
        // { name: 'Портативная аудиосистема Soundmax SM-PS5035B', price: 750, interests: ['Музыка'], image: '' },
        // { name: 'Портативная аудиосистема Soundmax SM-PS5035B', price: 750, interests: ['Музыка'], image: '' },
        // { name: 'Портативная аудиосистема Soundmax SM-PS5035B', price: 750, interests: ['Музыка'], image: '' },
        // { name: 'Портативная аудиосистема Soundmax SM-PS5035B', price: 750, interests: ['Музыка'], image: '' },
        // { name: 'Портативная аудиосистема Soundmax SM-PS5035B', price: 750, interests: ['Музыка'], image: '' },
        // { name: 'Портативная аудиосистема Soundmax SM-PS5035B', price: 750, interests: ['Музыка'], image: '' },
        // { name: 'Портативная аудиосистема Soundmax SM-PS5035B', price: 750, interests: ['Музыка'], image: '' },
        // { name: 'Портативная аудиосистема Soundmax SM-PS5035B', price: 750, interests: ['Музыка'], image: '' },
        // { name: 'Портативная аудиосистема Soundmax SM-PS5035B', price: 750, interests: ['Музыка'], image: '' },
    ];

    // Фильтруем товары по цене и интересам
    const filteredProducts = allProducts.filter(product => 
        product.price <= price && product.interests.some(interest => interests.includes(interest))
    );

    // Перемешиваем массив и выбираем первые три элемента
    const randomProducts = filteredProducts
        .sort(() => 0.5 - Math.random())
        .slice(0, 3);

    return (
        <div>
            <h2>Подходящие товары для {recipient}:</h2>
            <ul>
                {randomProducts.length > 0 ? (
                    randomProducts.map((product, index) => (
                        <div key={index}>
                            <img src={product.image} alt="#" />
                            <h3>{product.name}</h3>
                            <h2>{product.price} рублей</h2>
                        </div>
                    ))
                ) : (
                    <li>К сожалению, нет подходящих товаров.</li>
                )}
            </ul>
        </div>
    );
};

export default Results;
