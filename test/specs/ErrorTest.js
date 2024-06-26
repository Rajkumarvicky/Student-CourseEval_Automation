describe("Smoke test", async function () {

    it('Launch Url', async () => {

        await browser.url('https://t3.courseval.net/etw/ets/et.asp?nxappid=FT1&nxmid=start')
        await browser.pause(4000);
        await browser.maximizeWindow();

    })
    it('Login Function', async () => {


        await $("//input[@name='username']").setValue("$username")
        await $("//input[@name='pword']").setValue("$password")
        await browser.pause(4000);
        const myButton = await $("//button[@type='submit']")
        await myButton.click();

        await browser.pause(4000);
        await browser.saveScreenshot("./Screenshot0.png")


    })
    it('Click', async () => {
        await $("(//span[@class='hidden-sm'])[4]").click()
        await browser.pause(4000);
        await browser.saveScreenshot("./Screenshot1.png")

        await $("//a[text()='Import Results']").click()
        await browser.pause(4000);
        await browser.saveScreenshot("./Screenshot2.png")


    });

    it('Error Check', async () => {

        const Description1 = await $("//table[@class='table-bordered list-view-table table-responsive']//tr[@class='tlistcell'][1]//td[@width='20%']").getText()
        const Type1 = await $("//table[@class='table-bordered list-view-table table-responsive']//tr[@class='tlistcell'][1]//td[@align='CENTER'][3]").getText()
        const DateAndTime1 = await $("//table[@class='table-bordered list-view-table table-responsive']//tr[@class='tlistcell'][1]//td[@align='CENTER'][2]").getText()
        const Error1 = await $("//table[@class='table-bordered list-view-table table-responsive']//tr[@class='tlistcell'][1]//td[@align='CENTER'][10]").getText()

        if (Error1 === '0') {

            console.log("DESCRIPTION1 :", Description1)
            console.log("TYPE1 :", Type1)
            console.log("DATEANDTIME1 :", DateAndTime1)
            console.log("ERROR1 :", Error1)

            await browser.pause(3000);
            // await browser.saveScreenshot("./Screenshot11.png")

        }

        else {

            await $("//table[@class='table-bordered list-view-table table-responsive']//tr[@class='tlistcell'][1]//td[@align='CENTER'][12]").click()
            await browser.pause(3000);
            await browser.saveScreenshot("./Screenshot12.png")

        }

        const Description2 = await $("//table[@class='table-bordered list-view-table table-responsive']//tr[@class='tlistcell'][2]//td[@width='20%']").getText()
        const Type2 = await $("//table[@class='table-bordered list-view-table table-responsive']//tr[@class='tlistcell'][2]//td[@align='CENTER'][3]").getText()
        const DateAndTime2 = await $("//table[@class='table-bordered list-view-table table-responsive']//tr[@class='tlistcell'][2]//td[@align='CENTER'][2]").getText()
        const Error2 = await $("//table[@class='table-bordered list-view-table table-responsive']//tr[@class='tlistcell'][2]//td[@align='CENTER'][10]").getText()

        if (Error2 === '0') {

            console.log("DESCRIPTION2 :", Description2)
            console.log("TYPE2 :", Type2)
            console.log("DATEANDTIME2 :", DateAndTime2)
            console.log("ERROR2 :", Error2)

            await browser.pause(3000);
            // await browser.saveScreenshot("./Screenshot21.png")

        }

        else {

            await $("///table[@class='table-bordered list-view-table table-responsive']//tr[@class='tlistcell'][2]//td[@align='CENTER'][12]").click()
            await browser.pause(3000);
            await browser.saveScreenshot("./Screenshot22.png")

        }

        const Description3 = await $("//table[@class='table-bordered list-view-table table-responsive']//tr[@class='tlistcell'][3]//td[@width='20%']").getText()
        const Type3 = await $("//table[@class='table-bordered list-view-table table-responsive']//tr[@class='tlistcell'][3]//td[@align='CENTER'][3]").getText()
        const DateAndTime3 = await $("//table[@class='table-bordered list-view-table table-responsive']//tr[@class='tlistcell'][3]//td[@align='CENTER'][2]").getText()
        const Error3 = await $("//table[@class='table-bordered list-view-table table-responsive']//tr[@class='tlistcell'][3]//td[@align='CENTER'][10]").getText()


        if (Error3 === '0') {

            console.log("DESCRIPTION3 :", Description3)
            console.log("TYPE3 :", Type3)
            console.log("DATEANDTIME3 :", DateAndTime3)
            console.log("ERROR3 :", Error3)

            await browser.pause(3000);
            // await browser.saveScreenshot("./Screenshot31.png")

        }

        else {

            await $("//table[@class='table-bordered list-view-table table-responsive']//tr[@class='tlistcell'][3]//td[@align='CENTER'][12]").click()
            await browser.pause(3000);
            await browser.saveScreenshot("./Screenshot32.png")

        }
        const Description4 = await $("//table[@class='table-bordered list-view-table table-responsive']//tr[@class='tlistcell'][4]//td[@width='20%']").getText()
        const Type4 = await $("//table[@class='table-bordered list-view-table table-responsive']//tr[@class='tlistcell'][4]//td[@align='CENTER'][3]").getText()
        const DateAndTime4 = await $("//table[@class='table-bordered list-view-table table-responsive']//tr[@class='tlistcell'][4]//td[@align='CENTER'][2]").getText()
        const Error4 = await $("//table[@class='table-bordered list-view-table table-responsive']//tr[@class='tlistcell'][4]//td[@align='CENTER'][10]").getText()


        if (Error4 === '0') {

            console.log("DESCRIPTION4 :", Description4)
            console.log("TYPE4 :", Type4)
            console.log("DATEANDTIME4 :", DateAndTime4)
            console.log("ERROR4 :", Error4)

            await browser.pause(3000);
            // await browser.saveScreenshot("./Screenshot41.png")

        }

        else {

            await $("//table[@class='table-bordered list-view-table table-responsive']//tr[@class='tlistcell'][4]//td[13]").click()
            await browser.pause(3000);
            await browser.saveScreenshot("./Screenshot42.png")

        }
        const Description5 = await $("//table[@class='table-bordered list-view-table table-responsive']//tr[@class='tlistcell'][5]//td[@width='20%']").getText()
        const Type5 = await $("//table[@class='table-bordered list-view-table table-responsive']//tr[@class='tlistcell'][5]//td[@align='CENTER'][3]").getText()
        const DateAndTime5 = await $("//table[@class='table-bordered list-view-table table-responsive']//tr[@class='tlistcell'][5]//td[@align='CENTER'][2]").getText()
        const Error5 = await $("//table[@class='table-bordered list-view-table table-responsive']//tr[@class='tlistcell'][5]//td[@align='CENTER'][10]").getText()



        if (Error5 === '0') {

            console.log("DESCRIPTION5 :", Description5)
            console.log("TYPE5 :", Type5)
            console.log("DATEANDTIME5 :", DateAndTime5)
            console.log("ERROR5 :", Error5)

            await browser.pause(3000);
            // await browser.saveScreenshot("./Screenshot51.png")

        }

        else {

            await $("//table[@class='table-bordered list-view-table table-responsive']//tr[@class='tlistcell'][5]//td[13]").click()
            await browser.pause(3000);
            await browser.switchWindow('https://t3.courseval.net/etw/ets/et.asp?nxappid=FT1&nxmid=importslog.GetReport&logid=EMTH03P27D')
            await browser.pause(3000);
            await browser.maximizeWindow
            await browser.saveScreenshot("./Screenshot52.png")
            const table = await $("//table[@border='1'][2]").getText()
            console.log("Result Data", table);
            console.log("DESCRIPTION5 :", Description5)
            console.log("TYPE5 :", Type5)
            console.log("DATEANDTIME5 :", DateAndTime5)

            await browser.saveScreenshot("./Screenshot53.png")




        }


    });




});


