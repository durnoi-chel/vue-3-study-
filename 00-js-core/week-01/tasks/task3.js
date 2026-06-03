
async function delay(ms)  {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
    
}

function runWithThen()  {
    console.log("Start");

    delay(1000)
    .then(() =>  { // после первой залержки срабатывает первый зен
        console.log("1s passed");
        return delay(2000);
    })
    .then(() => {
        console.log("3s total"); // снова срабатывает зен после второй цзадержки и получает промис
    });
}

async function runWithAsync()  {
    console.log("Start");
    await delay(1000);  // останавливаемся и 1с ожидаем промис
    console.log("1s passed");
    await delay(2000); // ставим точку await тем самым сообщаем об остановке и ожидание промиса
    console.log("3s total"); // в целом сахар асинк аваит похож на стандартное построчное выполнени синхронное
}



async function runAllTests() {
  //  сохраняем оригинальный console.log, чтобы в конце вернуть всё как было
  const originalLog = console.log;
  let capturedLogs = [];
  
  // перехватываем console.log, чтобы проверять порядок вывода, не засоряя терминал
  console.log = (msg) => capturedLogs.push(msg);

  try {
    const delayResult = delay(10);
    console.assert(delayResult instanceof Promise, 'Test 1 Failed: delay() должен возвращать Promise');
    await delayResult; // ждем, чтобы не повесить процесс

    
    capturedLogs = []; // очищаем массив перед новым тестом
    await runWithThen(); 
    
    console.assert(
      JSON.stringify(capturedLogs) === JSON.stringify(['Start', '1s passed', '3s total']),
      `Test 2 Failed: runWithThen вывел неправильный порядок. Получено: ${capturedLogs}`
    );

    
    capturedLogs = [];
    await runWithAsync();
    
    console.assert(
      JSON.stringify(capturedLogs) === JSON.stringify(['Start', '1s passed', '3s total']),
      `Test 3 Failed: runWithAsync вывел неправильный порядок. Получено: ${capturedLogs}`
    );

    //  возвращаем оригинальный console.log, чтобы вывести результаты
    console.log = originalLog;
    console.log('✅ ВСЕ АСИНХРОННЫЕ ТЕСТЫ ПРОЙДЕНЫ!');

  } catch (error) {
    console.log = originalLog;
    console.error('❌ Тесты упали с ошибкой:', error);
    process.exit(1); // завершаем процесс с кодом ошибки
  }
}

// Запускаем
runAllTests();