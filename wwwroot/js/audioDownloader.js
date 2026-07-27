window.downloadAudioFile = async (fileName, contentStreamReference) => {
    const arrayBuffer = await contentStreamReference.arrayBuffer();
    const blob = new Blob([arrayBuffer], { type: 'audio/wav' });
    const url = URL.createObjectURL(blob);
    
    const anchorElement = document.createElement('a');
    anchorElement.href = url;
    anchorElement.download = fileName || 'Atmos_9.1.6_Interleaved.wav';
    anchorElement.click();
    
    anchorElement.remove();
    URL.revokeObjectURL(url);
};
