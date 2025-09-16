import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary">
      {/* Header */}
      <header className="bg-steel text-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Icon name="Factory" size={32} className="text-industrial-silver" />
              <h1 className="text-2xl font-bold">ТехноБак</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="hover:text-industrial-silver transition-colors">Главная</a>
              <a href="#products" className="hover:text-industrial-silver transition-colors">Продукция</a>
              <a href="#about" className="hover:text-industrial-silver transition-colors">О нас</a>
              <a href="#contact" className="hover:text-industrial-silver transition-colors">Контакты</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 px-6">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold text-steel mb-6">
              Топливные баки для автомобилей
            </h2>
            <p className="text-xl text-industrial-gray mb-8 leading-relaxed">
              Производство и поставка качественных топливных баков для ГАЗ, УАЗ, ПАЗ. 
              Надежность, проверенная временем.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-steel hover:bg-steel-light text-white px-8 py-3">
                <Icon name="Phone" size={20} className="mr-2" />
                Заказать звонок
              </Button>
              <Button variant="outline" size="lg" className="border-steel text-steel hover:bg-steel hover:text-white px-8 py-3">
                <Icon name="Download" size={20} className="mr-2" />
                Скачать каталог
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 px-6 bg-secondary">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold text-center text-steel mb-12">Наша продукция</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 border-industrial-metal hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 w-16 h-16 bg-steel rounded-full flex items-center justify-center">
                  <Icon name="Truck" size={32} className="text-white" />
                </div>
                <CardTitle className="text-steel">Баки для ГАЗ</CardTitle>
                <CardDescription>Полная линейка топливных баков для автомобилей ГАЗ</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-industrial-gray">
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-600 mr-2" />
                    ГАЗель всех модификаций
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-600 mr-2" />
                    ГАЗ-3307, 3309
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-600 mr-2" />
                    Соболь, Валдай
                  </li>
                </ul>
                <Button className="w-full mt-4 bg-steel hover:bg-steel-light">
                  Подробнее
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-industrial-metal hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 w-16 h-16 bg-steel rounded-full flex items-center justify-center">
                  <Icon name="Car" size={32} className="text-white" />
                </div>
                <CardTitle className="text-steel">Баки для УАЗ</CardTitle>
                <CardDescription>Топливные баки для внедорожников УАЗ</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-industrial-gray">
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-600 mr-2" />
                    УАЗ Патриот
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-600 mr-2" />
                    УАЗ Хантер
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-600 mr-2" />
                    УАЗ Буханка
                  </li>
                </ul>
                <Button className="w-full mt-4 bg-steel hover:bg-steel-light">
                  Подробнее
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-industrial-metal hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 w-16 h-16 bg-steel rounded-full flex items-center justify-center">
                  <Icon name="Bus" size={32} className="text-white" />
                </div>
                <CardTitle className="text-steel">Баки для ПАЗ</CardTitle>
                <CardDescription>Топливные системы для автобусов ПАЗ</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-industrial-gray">
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-600 mr-2" />
                    ПАЗ-3205
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-600 mr-2" />
                    ПАЗ-4234
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-600 mr-2" />
                    ПАЗ Vector
                  </li>
                </ul>
                <Button className="w-full mt-4 bg-steel hover:bg-steel-light">
                  Подробнее
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold text-center text-steel mb-12">Преимущества наших баков</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="mx-auto mb-4 w-16 h-16 bg-industrial-silver rounded-full flex items-center justify-center">
                <Icon name="Shield" size={32} className="text-steel" />
              </div>
              <h4 className="text-xl font-semibold text-steel mb-2">Надежность</h4>
              <p className="text-industrial-gray">Проверенное качество и долговечность материалов</p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-4 w-16 h-16 bg-industrial-silver rounded-full flex items-center justify-center">
                <Icon name="Wrench" size={32} className="text-steel" />
              </div>
              <h4 className="text-xl font-semibold text-steel mb-2">Точная посадка</h4>
              <p className="text-industrial-gray">Идеальное соответствие заводским размерам</p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-4 w-16 h-16 bg-industrial-silver rounded-full flex items-center justify-center">
                <Icon name="Award" size={32} className="text-steel" />
              </div>
              <h4 className="text-xl font-semibold text-steel mb-2">Сертификация</h4>
              <p className="text-industrial-gray">Соответствие всем российским стандартам</p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-4 w-16 h-16 bg-industrial-silver rounded-full flex items-center justify-center">
                <Icon name="Clock" size={32} className="text-steel" />
              </div>
              <h4 className="text-xl font-semibold text-steel mb-2">Быстрая доставка</h4>
              <p className="text-industrial-gray">Оперативная отгрузка по всей России</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6 bg-secondary">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-bold text-steel mb-6">О компании ТехноБак</h3>
              <p className="text-industrial-gray mb-6 leading-relaxed">
                Более 15 лет мы специализируемся на производстве качественных топливных баков 
                для российских автомобилей. Наше производство оснащено современным оборудованием, 
                что позволяет обеспечивать высокое качество продукции.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-bold text-steel">15+</div>
                  <div className="text-industrial-gray">лет опыта</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-steel">5000+</div>
                  <div className="text-industrial-gray">довольных клиентов</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-steel">100+</div>
                  <div className="text-industrial-gray">моделей баков</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-steel">24/7</div>
                  <div className="text-industrial-gray">техподдержка</div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h4 className="text-2xl font-bold text-steel mb-4">Технические характеристики</h4>
              <ul className="space-y-3 text-industrial-gray">
                <li className="flex items-center">
                  <Icon name="Check" size={16} className="text-green-600 mr-3" />
                  Материал: сталь 08пс толщиной 1,2-1,5 мм
                </li>
                <li className="flex items-center">
                  <Icon name="Check" size={16} className="text-green-600 mr-3" />
                  Антикоррозийное покрытие
                </li>
                <li className="flex items-center">
                  <Icon name="Check" size={16} className="text-green-600 mr-3" />
                  Герметичность 100%
                </li>
                <li className="flex items-center">
                  <Icon name="Check" size={16} className="text-green-600 mr-3" />
                  Рабочее давление до 0,5 атм
                </li>
                <li className="flex items-center">
                  <Icon name="Check" size={16} className="text-green-600 mr-3" />
                  Температурный диапазон -40°C до +80°C
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold text-center text-steel mb-12">Свяжитесь с нами</h3>
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="text-center border-2 border-industrial-metal">
              <CardHeader>
                <div className="mx-auto mb-4 w-16 h-16 bg-steel rounded-full flex items-center justify-center">
                  <Icon name="Phone" size={32} className="text-white" />
                </div>
                <CardTitle className="text-steel">Телефон</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-industrial-gray mb-2">+7 (495) 123-45-67</p>
                <p className="text-industrial-gray">+7 (800) 100-20-30</p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-industrial-metal">
              <CardHeader>
                <div className="mx-auto mb-4 w-16 h-16 bg-steel rounded-full flex items-center justify-center">
                  <Icon name="Mail" size={32} className="text-white" />
                </div>
                <CardTitle className="text-steel">Email</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-industrial-gray mb-2">info@technobak.ru</p>
                <p className="text-industrial-gray">sales@technobak.ru</p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-industrial-metal">
              <CardHeader>
                <div className="mx-auto mb-4 w-16 h-16 bg-steel rounded-full flex items-center justify-center">
                  <Icon name="MapPin" size={32} className="text-white" />
                </div>
                <CardTitle className="text-steel">Адрес</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-industrial-gray mb-2">г. Москва, ул. Промышленная, 15</p>
                <p className="text-industrial-gray">Режим работы: Пн-Пт 9:00-18:00</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-steel text-white py-8 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Icon name="Factory" size={24} className="text-industrial-silver" />
                <h4 className="text-xl font-bold">ТехноБак</h4>
              </div>
              <p className="text-industrial-silver">
                Производство качественных топливных баков для российских автомобилей
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Быстрые ссылки</h5>
              <ul className="space-y-2 text-industrial-silver">
                <li><a href="#home" className="hover:text-white transition-colors">Главная</a></li>
                <li><a href="#products" className="hover:text-white transition-colors">Продукция</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Контакты</h5>
              <div className="space-y-2 text-industrial-silver">
                <p>+7 (495) 123-45-67</p>
                <p>info@technobak.ru</p>
                <p>г. Москва, ул. Промышленная, 15</p>
              </div>
            </div>
          </div>
          <div className="border-t border-steel-light mt-8 pt-6 text-center text-industrial-silver">
            <p>&copy; 2024 ТехноБак. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;