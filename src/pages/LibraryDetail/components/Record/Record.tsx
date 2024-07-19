import { Chip } from '@mui/material'
import React from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { getFormattedDateTime } from '../../../../utils/getFormattedDate'
import { RecordType } from '../../../../types/libraryType'
import { deleteRecord } from '../../../../services/record'

export default function Record({ value }: { value: RecordType }) {
    const queryClient = useQueryClient()
    const deleteRecordMutation = useMutation({
        mutationFn: () => deleteRecord(value.recordId),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['records'] })
        },
        onError: (error) => {
            console.log('error 발생', error)
        },
    })
    const handleDeleteRecord = () => {
        if (window.confirm(`기록을 삭제하시겠습니까?`)) {
            deleteRecordMutation.mutate()
        }
    }
    return (
        <div className="flex gap-4 p-4 border-b-[0.5px] border-gray">
            <div className="flex flex-col gap-2 items-center">
                {value.tag && (
                    <Chip
                        label={value.tag}
                        sx={{
                            backgroundColor: '#1E863B',
                            color: 'white',
                            fontWeight: 'bold',
                            fontSize: '1rem',
                        }}
                    />
                )}
                {!value.page ? (
                    ''
                ) : (
                    <span className="text-lg font-bold">p. {value.page}</span>
                )}
            </div>
            <div className="flex flex-col flex-1 justify-between min-h-20">
                <p className="text-lg">{value.content}</p>
                <div className="flex gap-4 justify-end text-gray text-sm">
                    <span>{getFormattedDateTime(value.createdAt)}</span>
                    <button
                        type="button"
                        className="underline"
                        onClick={handleDeleteRecord}
                    >
                        삭제
                    </button>
                </div>
            </div>
        </div>
    )
}
