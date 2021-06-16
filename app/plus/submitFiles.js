module.exports.submit = function (tmp_path, target_path, fileNema, res) {
    var fs = require('fs');

    try {
        fs.rename(tmp_path, target_path, function (err) {
            if (err) return { fileName: fileNema, save: false };
            fs.unlink(tmp_path, function () {
                if (err) return { fileName: fileNema, save: false };
            });

            return { fileName: fileNema, save: true };
        });

        return { fileName: fileNema, save: true };
    } catch (err) {
        return { fileName: fileNema, save: false }
    }
}

module.exports.delet = function (target_path) {
    var fs = require('fs');
    try {
        fs.unlink(target_path, function (err) {
            if (err) return { save: false };
        });

        return { save: true };
    } catch (err) {
        return { save: false }
    }
}