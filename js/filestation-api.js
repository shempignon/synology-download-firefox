var FileStationAPI = (function () {
    function FileStationAPI(downloadStation) {
        this.downloadStation = downloadStation;
    }
    FileStationAPI.prototype.listFolders = function (folderPath, callback) {
        var _this = this;
        if (!folderPath) {
            folderPath = "/";
        }
        if (folderPath == "/") {
            this.fileStationListShare(function (success, data) {
                if (data.shares) {
                    data = data.shares;
                }
                if (callback) {
                    callback(success, data);
                }
            });
        }
        else {
            this.fileStationList(folderPath, function (success, data) {
                if (data.files) {
                    data = data.files;
                }
                if (callback) {
                    callback.call(_this, success, data);
                }
            });
        }
    };
    ;
    FileStationAPI.prototype.createFolder = function (destinationPath, name, callback) {
        var params = {
            dest: destinationPath,
            type: 'folder',
            name: name
        };
        downloadStation._apiCall('SYNO.Core.File', 'create', 1, params, callback);
    };
    ;
    FileStationAPI.prototype.fileStationListShare = function (callback) {
        var params = {
            offset: 0,
            limit: 0,
            sort_by: 'name',
            sort_direction: 'asc',
            onlywritable: false,
            additional: 'perm'
        };
        downloadStation._apiCall('SYNO.FileStation.List', 'list_share', 1, params, callback);
    };
    ;
    FileStationAPI.prototype.fileStationList = function (folderPath, callback) {
        var params = {
            folder_path: folderPath,
            offset: 0,
            limit: 0,
            sort_by: 'name',
            sort_direction: 'asc',
            filetype: 'dir',
            onlywritable: false,
            additional: 'perm'
        };
        downloadStation._apiCall('SYNO.FileStation.List', 'list', 1, params, callback);
    };
    ;
    FileStationAPI.prototype.fileStationFileInfo = function (paths, callback) {
        if (Array.isArray(paths)) {
            paths = paths.join(",");
        }
        var params = {
            path: paths,
            additional: "size,type"
        };
        downloadStation._apiCall('SYNO.FileStation.List', 'getinfo', 1, params, callback);
    };
    FileStationAPI.prototype.fileStationCreateFolder = function (folder_path, names, callback) {
        if (Array.isArray(names)) {
            names = names.join(",");
        }
        var params = {
            folder_path: folder_path,
            name: names,
            force_parent: false
        };
        downloadStation._apiCall('SYNO.FileStation.CreateFolder', 'create', 1, params, callback);
    };
    FileStationAPI.prototype.fileStationRename = function (path, newName, callback) {
        var params = {
            path: path,
            name: newName,
            additional: "perm"
        };
        downloadStation._apiCall("SYNO.FileStation.Rename", "rename", 1, params, function (success, data, errors) {
            if (success && data.files.length == 1) {
                data = data.files[0];
            }
            if (callback) {
                callback(success, data, errors);
            }
        });
    };
    FileStationAPI.prototype.fileStationDelete = function (paths, callback) {
        if (Array.isArray(paths)) {
            paths = paths.join(",");
        }
        var params = {
            path: paths,
            recursive: true
        };
        downloadStation._apiCall('SYNO.FileStation.Delete', 'delete', 1, params, callback);
    };
    ;
    return FileStationAPI;
}());

//# sourceMappingURL=data:application/json;base64,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QUFFLE1BQU07WUFDOUYsRUFBRSxDQUFBLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3RDLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2IsQ0FBQztZQUVWLEVBQUUsQ0FBQSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7Z0JBQ2IsUUFBUSxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDeEIsQ0FBQztRQUNYLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVNLDBDQUFpQixHQUF4QixVQUF5QixLQUEyQixFQUFFLFFBQXNGO1FBRTNJLEVBQUUsQ0FBQSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FDeEIsQ0FBQztZQUNBLEtBQUssR0FBbUIsS0FBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMxQyxDQUFDO1FBRUUsSUFBSSxNQUFNLEdBQUc7WUFDWixJQUFJLEVBQUUsS0FBSztZQUNYLFNBQVMsRUFBRSxJQUFJO1NBQ2YsQ0FBQztRQUVGLGVBQWUsQ0FBQyxRQUFRLENBQUMseUJBQXlCLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDdkYsQ0FBQzs7SUFDRixxQkFBQztBQUFELENBM0lBLEFBMklDLElBQUEiLCJmaWxlIjoianMvZmlsZXN0YXRpb24tYXBpLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgRmlsZVN0YXRpb25BUEkge1xyXG4gICAgcHJpdmF0ZSBkb3dubG9hZFN0YXRpb246IERvd25sb2FkU3RhdGlvbkFQSTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihkb3dubG9hZFN0YXRpb246IERvd25sb2FkU3RhdGlvbkFQSSkge1xyXG4gICAgICAgIHRoaXMuZG93bmxvYWRTdGF0aW9uID0gZG93bmxvYWRTdGF0aW9uO1xyXG4gICAgfVxyXG5cclxuXHRwdWJsaWMgbGlzdEZvbGRlcnMoZm9sZGVyUGF0aDogc3RyaW5nLCBjYWxsYmFjazogKHN1Y2Nlc3M6IGJvb2xlYW4sIGRhdGE6IGFueSkgPT4gdm9pZCk6IHZvaWQge1xyXG5cdFx0aWYoIWZvbGRlclBhdGgpXHJcblx0XHR7XHJcblx0XHRcdGZvbGRlclBhdGggPSBcIi9cIjtcclxuXHRcdH1cclxuXHJcblx0XHRpZihmb2xkZXJQYXRoID09IFwiL1wiKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLmZpbGVTdGF0aW9uTGlzdFNoYXJlKChzdWNjZXNzLCBkYXRhKSA9PiB7XHJcblx0XHRcdFx0aWYoZGF0YS5zaGFyZXMpIHtcclxuXHRcdFx0XHRcdGRhdGEgPSBkYXRhLnNoYXJlcztcclxuICAgICAgICAgICAgICAgIH1cclxuXHRcdFx0XHRcclxuXHRcdFx0ICAgIGlmKGNhbGxiYWNrKSB7XHJcblx0XHRcdCAgICBcdGNhbGxiYWNrKHN1Y2Nlc3MsIGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5maWxlU3RhdGlvbkxpc3QoZm9sZGVyUGF0aCwgKHN1Y2Nlc3MsIGRhdGEpID0+IHtcclxuXHRcdFx0XHRpZihkYXRhLmZpbGVzKSB7XHJcblx0XHRcdFx0XHRkYXRhID0gZGF0YS5maWxlcztcclxuICAgICAgICAgICAgICAgIH1cclxuXHRcdFx0XHRcclxuXHRcdFx0ICAgIGlmKGNhbGxiYWNrKSB7XHJcblx0XHRcdCAgICBcdGNhbGxiYWNrLmNhbGwodGhpcywgc3VjY2VzcywgZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH07XHJcblx0XHJcblx0cHVibGljIGNyZWF0ZUZvbGRlcihkZXN0aW5hdGlvblBhdGg6IHN0cmluZywgbmFtZTogc3RyaW5nLCBjYWxsYmFjazogKHN1Y2Nlc3M6IGJvb2xlYW4sIGRhdGE6IGFueSkgPT4gdm9pZCk6IHZvaWQge1xyXG5cdFx0dmFyIHBhcmFtcyA9IHtcclxuXHRcdFx0ZGVzdDogZGVzdGluYXRpb25QYXRoLFxyXG5cdFx0XHR0eXBlOiAnZm9sZGVyJyxcclxuXHRcdFx0bmFtZTogbmFtZVxyXG5cdFx0fTtcclxuXHRcdFxyXG5cdCAgICBkb3dubG9hZFN0YXRpb24uX2FwaUNhbGwoJ1NZTk8uQ29yZS5GaWxlJywgJ2NyZWF0ZScsIDEsIHBhcmFtcywgY2FsbGJhY2spO1xyXG5cdH07XHJcblx0XHJcblx0cHVibGljIGZpbGVTdGF0aW9uTGlzdFNoYXJlKGNhbGxiYWNrOiAoc3VjY2VzczogYm9vbGVhbiwgZGF0YTogYW55KSA9PiB2b2lkKTogdm9pZCB7XHJcblx0ICAgIHZhciBwYXJhbXMgPSB7XHJcblx0ICAgICAgICBvZmZzZXQ6IDAsXHJcblx0ICAgICAgICBsaW1pdDogMCxcclxuXHQgICAgICAgIHNvcnRfYnk6ICduYW1lJyxcclxuXHQgICAgICAgIHNvcnRfZGlyZWN0aW9uOiAnYXNjJyxcclxuXHQgICAgICAgIG9ubHl3cml0YWJsZTogZmFsc2UsXHJcblx0ICAgICAgICBhZGRpdGlvbmFsOiAncGVybSdcclxuXHQgICAgfTtcclxuXHRcclxuXHQgICAgZG93bmxvYWRTdGF0aW9uLl9hcGlDYWxsKCdTWU5PLkZpbGVTdGF0aW9uLkxpc3QnLCAnbGlzdF9zaGFyZScsIDEsIHBhcmFtcywgY2FsbGJhY2spO1xyXG5cdH07XHJcblx0XHJcblx0cHVibGljIGZpbGVTdGF0aW9uTGlzdChmb2xkZXJQYXRoOiBzdHJpbmcsIGNhbGxiYWNrOiAoc3VjY2VzczogYm9vbGVhbiwgZGF0YTogYW55KSA9PiB2b2lkKTogdm9pZCB7XHJcblx0ICAgIHZhciBwYXJhbXMgPSB7XHJcblx0ICAgIFx0Zm9sZGVyX3BhdGg6IGZvbGRlclBhdGgsXHJcblx0ICAgICAgICBvZmZzZXQ6IDAsXHJcblx0ICAgICAgICBsaW1pdDogMCxcclxuXHQgICAgICAgIHNvcnRfYnk6ICduYW1lJyxcclxuXHQgICAgICAgIHNvcnRfZGlyZWN0aW9uOiAnYXNjJyxcclxuXHQgICAgICAgIGZpbGV0eXBlOiAnZGlyJywgLy8gZmlsZSwgZGlyLCBhbGxcclxuXHQgICAgICAgIG9ubHl3cml0YWJsZTogZmFsc2UsXHJcblx0ICAgICAgICBhZGRpdGlvbmFsOiAncGVybSdcclxuXHQgICAgfTtcclxuICAgICAgICBcclxuXHQgICAgZG93bmxvYWRTdGF0aW9uLl9hcGlDYWxsKCdTWU5PLkZpbGVTdGF0aW9uLkxpc3QnLCAnbGlzdCcsIDEsIHBhcmFtcywgY2FsbGJhY2spO1xyXG5cdH07XHJcblx0XHJcblx0cHVibGljIGZpbGVTdGF0aW9uRmlsZUluZm8ocGF0aHM6IHN0cmluZ3xBcnJheTxzdHJpbmc+LCBjYWxsYmFjazogKHN1Y2Nlc3M6IGJvb2xlYW4sIGRhdGE6IGFueSkgPT4gdm9pZCk6IHZvaWQge1xyXG5cdFx0aWYoQXJyYXkuaXNBcnJheShwYXRocykpXHJcblx0XHR7XHJcblx0XHRcdHBhdGhzID0gKDxBcnJheTxzdHJpbmc+PnBhdGhzKS5qb2luKFwiLFwiKTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdCAgICB2YXIgcGFyYW1zID0ge1xyXG5cdCAgICBcdHBhdGg6IHBhdGhzLFxyXG5cdCAgICBcdGFkZGl0aW9uYWw6IFwic2l6ZSx0eXBlXCJcclxuXHQgICAgfTtcclxuXHRcclxuXHQgICAgZG93bmxvYWRTdGF0aW9uLl9hcGlDYWxsKCdTWU5PLkZpbGVTdGF0aW9uLkxpc3QnLCAnZ2V0aW5mbycsIDEsIHBhcmFtcywgY2FsbGJhY2spO1xyXG5cdH1cclxuXHRcclxuXHRwdWJsaWMgZmlsZVN0YXRpb25DcmVhdGVGb2xkZXIoZm9sZGVyX3BhdGg6IHN0cmluZywgbmFtZXM6IHN0cmluZ3xBcnJheTxzdHJpbmc+LCBjYWxsYmFjazogKHN1Y2Nlc3M6IGJvb2xlYW4sIGRhdGE6IGFueSwgYWRkaXRpb25hbEVycm9ycz86IFN5bm9sb2d5QXBpRXJyb3JbXSkgPT4gdm9pZCk6IHZvaWQge1xyXG5cdFx0XHJcblx0XHRpZihBcnJheS5pc0FycmF5KG5hbWVzKSlcclxuXHRcdHtcclxuXHRcdFx0bmFtZXMgPSAoPEFycmF5PHN0cmluZz4+bmFtZXMpLmpvaW4oXCIsXCIpO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0ICAgIHZhciBwYXJhbXMgPSB7XHJcblx0ICAgIFx0Zm9sZGVyX3BhdGg6IGZvbGRlcl9wYXRoLFxyXG5cdCAgICBcdG5hbWU6IG5hbWVzLFxyXG5cdCAgICBcdGZvcmNlX3BhcmVudDogZmFsc2VcclxuXHQgICAgfTtcclxuXHRcclxuXHQgICAgZG93bmxvYWRTdGF0aW9uLl9hcGlDYWxsKCdTWU5PLkZpbGVTdGF0aW9uLkNyZWF0ZUZvbGRlcicsICdjcmVhdGUnLCAxLCBwYXJhbXMsIGNhbGxiYWNrKTtcclxuXHR9XHJcblx0XHJcblx0cHVibGljIGZpbGVTdGF0aW9uUmVuYW1lKHBhdGg6IHN0cmluZywgbmV3TmFtZTogc3RyaW5nLCBjYWxsYmFjazogKHN1Y2Nlc3M6IGJvb2xlYW4sIGRhdGE6IGFueSwgYWRkaXRpb25hbEVycm9ycz86IFN5bm9sb2d5QXBpRXJyb3JbXSkgPT4gdm9pZCk6IHZvaWQge1xyXG5cdFx0dmFyIHBhcmFtcyA9IHtcclxuXHRcdFx0cGF0aDogcGF0aCxcclxuXHRcdFx0bmFtZTogbmV3TmFtZSxcclxuXHRcdFx0YWRkaXRpb25hbDogXCJwZXJtXCJcclxuXHRcdH07XHJcblx0XHRcclxuXHRcdGRvd25sb2FkU3RhdGlvbi5fYXBpQ2FsbChcIlNZTk8uRmlsZVN0YXRpb24uUmVuYW1lXCIsIFwicmVuYW1lXCIsIDEsIHBhcmFtcywgKHN1Y2Nlc3MsIGRhdGEsIGVycm9ycykgPT4ge1xyXG5cdFx0XHRpZihzdWNjZXNzICYmIGRhdGEuZmlsZXMubGVuZ3RoID09IDEpIHtcclxuXHRcdFx0XHRkYXRhID0gZGF0YS5maWxlc1swXTtcclxuICAgICAgICAgICAgfVxyXG5cdFx0XHRcclxuXHRcdFx0aWYoY2FsbGJhY2spIHtcclxuXHRcdFx0XHRjYWxsYmFjayhzdWNjZXNzLCBkYXRhLCBlcnJvcnMpO1xyXG4gICAgICAgICAgICB9XHJcblx0XHR9KTtcclxuXHR9XHJcblx0XHJcblx0cHVibGljIGZpbGVTdGF0aW9uRGVsZXRlKHBhdGhzOiBzdHJpbmd8QXJyYXk8c3RyaW5nPiwgY2FsbGJhY2s6IChzdWNjZXNzOiBib29sZWFuLCBkYXRhOiBhbnksIGFkZGl0aW9uYWxFcnJvcnM/OiBTeW5vbG9neUFwaUVycm9yW10pID0+IHZvaWQpOiB2b2lkIHtcclxuXHRcdFxyXG5cdFx0aWYoQXJyYXkuaXNBcnJheShwYXRocykpXHJcblx0XHR7XHJcblx0XHRcdHBhdGhzID0gKDxBcnJheTxzdHJpbmc+PnBhdGhzKS5qb2luKFwiLFwiKTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdCAgICB2YXIgcGFyYW1zID0ge1xyXG5cdCAgICBcdHBhdGg6IHBhdGhzLFxyXG5cdCAgICBcdHJlY3Vyc2l2ZTogdHJ1ZVxyXG5cdCAgICB9O1xyXG4gICAgICAgIFxyXG5cdCAgICBkb3dubG9hZFN0YXRpb24uX2FwaUNhbGwoJ1NZTk8uRmlsZVN0YXRpb24uRGVsZXRlJywgJ2RlbGV0ZScsIDEsIHBhcmFtcywgY2FsbGJhY2spO1xyXG5cdH07XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
