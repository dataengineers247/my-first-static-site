module.exports = async function (context, req) {

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: {text: "I'm Message 2 "}
    };
}